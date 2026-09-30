/*
 * Runs every approach of every problem against its examples. In topics that have
 * problems, it also runs each synchronous "predict the output" quiz against its marked answer.
 * It also checks that every comparison table has one cell per compared item, that every multiple-choice
 * question has distinct options and an answer index that exists, that every shortcut's answer is one of its options,
 * and that every figure is well-formed SVG using only the allowed elements, classes and explanation steps.
 * Usage: npm run verify [subjectId]   (default: all subjects)
 */
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { format } from 'node:util';
import { createJiti } from 'jiti';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const jiti = createJiti(import.meta.url, { alias: { '@': path.join(root, 'src') } });
const { runExample, show } = await jiti.import(path.join(root, 'src/lib/runProblem.ts'));

const only = process.argv[2];
const subjects = readdirSync(path.join(root, 'src/content/subjects')).filter((s) => !only || s === only);
let checked = 0;
const failures = [];

const FIG_TAGS = new Set(['line', 'path', 'polyline', 'polygon', 'circle', 'ellipse', 'rect', 'text', 'g', 'tspan']);
const FIG_CLASSES = new Set(
  'd-red d-green d-blue d-soft d-thin d-thick d-dash d-fill d-fill-pink d-fill-blue d-fill-green d-dot d-small'.split(' '),
);

/** Problems with a figure's markup, or [] when it is fine. `steps` is the number of explanation lines, if any. */
function figureProblems(fig, steps) {
  const out = [];
  if (!/^-?[\d.]+ -?[\d.]+ [\d.]+ [\d.]+$/.test(fig.viewBox ?? '')) out.push(`bad viewBox "${fig.viewBox}"`);
  if (/\b(style|fill|stroke|on\w+)\s*=|<script|\$\{/i.test(fig.svg)) out.push('uses style, fill, stroke, an event handler or a script');
  const stack = [];
  for (const m of fig.svg.matchAll(/<(\/?)([a-zA-Z]+)([^>]*?)(\/?)>/g)) {
    const [, close, tag, attrs, self] = m;
    if (!FIG_TAGS.has(tag)) out.push(`element <${tag}> is not allowed`);
    if (close) {
      if (stack.pop() !== tag) out.push(`</${tag}> does not match its opening tag`);
      continue;
    }
    if (!self) stack.push(tag);
    for (const c of /class="([^"]*)"/.exec(attrs)?.[1].split(/\s+/).filter(Boolean) ?? [])
      if (!FIG_CLASSES.has(c)) out.push(`unknown class "${c}"`);
    for (const n of /data-step="([^"]*)"/.exec(attrs)?.[1].split(/[\s,]+/).map(Number) ?? [])
      if (!Number.isInteger(n) || n < 1 || steps === undefined || n > steps) out.push(`data-step ${n} has no explanation line`);
  }
  if (stack.length) out.push(`unclosed <${stack.join('>, <')}>`);
  if (fig.svg.replace(/<[^>]*>/g, '').includes('<')) out.push('stray "<" in text (write &lt;)');
  return out;
}

function captureConsole(code) {
  const lines = [];
  const fakeConsole = { log: (...a) => lines.push(format(...a)) };
  new Function('console', code)(fakeConsole);
  return lines.join('\n');
}

for (const id of subjects) {
  const subject = await jiti.import(path.join(root, `src/content/subjects/${id}/index.ts`), { default: true });
  for (const cat of subject.categories) {
    for (const topic of cat.topics) {
      for (const cmp of topic.comparisons ?? []) {
        const n = cmp.items.length;
        const where = `${topic.id} / comparison "${cmp.title ?? cmp.items.join(' vs ')}"`;
        for (const row of cmp.rows) {
          checked++;
          if (row.values.length !== n) failures.push(`${where} / row "${row.aspect}": ${row.values.length} cells for ${n} items`);
        }
        for (const [name, list] of [['whenToUse', cmp.whenToUse], ['code', cmp.code]]) {
          checked++;
          if (list && list.length !== n) failures.push(`${where}: ${name} has ${list.length} entries for ${n} items`);
        }
      }
      for (const v of topic.visuals ?? []) {
        if (v.type !== 'diagram') continue;
        checked++;
        for (const f of figureProblems(v.figure, v.explain.length)) failures.push(`${topic.id} / diagram "${v.title}": ${f}`);
      }
      for (const [k, q] of (topic.quiz ?? []).entries()) {
        if (q.figure) {
          checked++;
          for (const f of figureProblems(q.figure)) failures.push(`${topic.id} / quiz ${k + 1} figure: ${f}`);
        }
        if (q.type !== 'mcq' && q.type !== 'output') continue;
        checked++;
        const where = `${topic.id} / quiz ${k + 1}`;
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) failures.push(`${where}: answer index ${q.answer} out of range`);
        if (new Set(q.options).size !== q.options.length) failures.push(`${where}: duplicate options`);
      }
      for (const s of topic.shortcuts ?? []) {
        checked++;
        if (s.options && !s.options.includes(s.answer)) failures.push(`${topic.id} / shortcut "${s.pattern}": answer "${s.answer}" is not one of its options`);
      }
      for (const p of topic.problems ?? []) {
        for (const a of [...p.approaches, ...(p.alternatives ?? [])]) {
          p.examples.forEach((ex, k) => {
            checked++;
            const r = runExample(a.code, p.fn, ex.args, ex.output, p.anyOrder);
            if (!r.ok)
              failures.push(`${topic.id} / ${p.id} / ${a.name} / example ${k + 1}: expected ${show(ex.output)}, got ${r.error ?? show(r.got)}`);
          });
        }
      }
      for (const q of topic.problems ? (topic.quiz ?? []) : []) {
        if (q.type !== 'output' || /setTimeout|Promise|await|document|window/.test(q.code)) continue;
        checked++;
        const want = q.options[q.answer].replace(/^`|`$/g, '').replace(/\\n/g, '\n');
        let got;
        try { got = captureConsole(q.code); } catch (e) { got = `throws ${e.message}`; }
        if (got !== want) failures.push(`${topic.id} / quiz "${q.code.slice(0, 40)}…": marked ${JSON.stringify(want)}, ran ${JSON.stringify(got)}`);
      }
    }
  }
}

console.log(`${checked} checks, ${failures.length} failures`);
for (const f of failures) console.log('  ✗ ' + f);
process.exit(failures.length ? 1 : 0);
