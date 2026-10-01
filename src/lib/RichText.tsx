import { Fragment, type ReactNode } from 'react';

/** Renders content strings with `code`, **bold** and stacked fractions (`a/b`, `(a + b)/(a − b)`). */
export function RichText({ text }: { text: string }) {
  // Keep ratios such as "4 : 21" on one line.
  const parts = text.replace(/(\d) : (?=\d)/g, '$1\u00a0:\u00a0').split(/(`[^`]+`|\*\*.+?\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.length > 1 && part.startsWith('`') && part.endsWith('`'))
          return (
            <code key={i} className="font-mono rounded bg-muted px-[0.35em] py-[0.1em] text-[0.88em]">
              {withFractions(part.slice(1, -1))}
            </code>
          );
        if (part.length > 3 && part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{withFractions(part.slice(2, -2))}</strong>;
        return <Fragment key={i}>{withFractions(part)}</Fragment>;
      })}
    </>
  );
}

// ---------- Fractions ----------
// "a/b" is drawn as a over b with a horizontal bar. An operand is a bracketed group (its outer
// brackets are dropped) or a run of letters, digits and maths symbols. A slash between plain words
// ("and/or") and units (km/h, m/s) stay as they are.

const ATOM = /[\p{L}\p{M}\p{N}.°√π′Σ₀-₉]/u;
const UNITS = new Set(['km/h', 'km/hr', 'm/s', 'cm/s', 'm/min', 'km/min', 'km/l', 'kg/m']);
const OPEN: Record<string, string> = { ')': '(', ']': '[' };
const CLOSE: Record<string, string> = { '(': ')', '[': ']' };

interface Operand {
  start: number;
  end: number; // exclusive
  inner: string;
  group: boolean;
}

function leftOperand(s: string, slash: number): Operand | null {
  let end = slash;
  while (end > 0 && s[end - 1] === ' ') end--;
  const spaced = end !== slash;
  if (end === 0) return null;
  const last = s[end - 1];
  if (OPEN[last]) {
    let depth = 0;
    for (let i = end - 1; i >= 0; i--) {
      if (s[i] === last) depth++;
      else if (s[i] === OPEN[last] && --depth === 0) return { start: i, end, inner: s.slice(i + 1, end - 1), group: true };
    }
    return null;
  }
  if (spaced) return null;
  let start = end;
  while (start > 0 && (ATOM.test(s[start - 1]) || isDigitComma(s, start - 1))) start--;
  return start === end ? null : { start, end, inner: s.slice(start, end), group: false };
}

function rightOperand(s: string, slash: number): Operand | null {
  let start = slash + 1;
  while (start < s.length && s[start] === ' ') start++;
  if (start >= s.length) return null;
  const first = s[start];
  if (CLOSE[first]) {
    let depth = 0;
    for (let i = start; i < s.length; i++) {
      if (s[i] === first) depth++;
      else if (s[i] === CLOSE[first] && --depth === 0) return { start, end: i + 1, inner: s.slice(start + 1, i), group: true };
    }
    return null;
  }
  let end = start;
  if (/\d/.test(first)) {
    // A number ends at its digits (and any power), so "4/3πr³" reads as (4/3)πr³.
    while (end < s.length && (/[\d.²³⁴ⁿ]/.test(s[end]) || isDigitComma(s, end))) end++;
  } else {
    while (end < s.length && ATOM.test(s[end])) end++;
  }
  // A full stop that ends the sentence is not part of the denominator.
  while (end > start && s[end - 1] === '.' && !/\d/.test(s[end] ?? '')) end--;
  if (end === start) return null;
  return { start, end, inner: s.slice(start, end), group: false };
}

/** A comma inside a number, as in 1,00,000. */
const isDigitComma = (s: string, i: number) => s[i] === ',' && /\d/.test(s[i - 1] ?? '') && /\d/.test(s[i + 1] ?? '');

const isShortSymbol = (x: string) => /^\p{L}{1,2}[²³⁴ⁿ′]?$/u.test(x);

function isFraction(s: string, l: Operand, r: Operand, slash: number) {
  const spaced = l.end !== slash || r.start !== slash + 1;
  if (spaced && !l.group && !r.group) return false;
  if (!l.group && !r.group && UNITS.has(s.slice(l.start, r.end).toLowerCase())) return false;
  if (l.group || r.group) return true;
  const mathy = /[\d²³⁴ⁿθΣπ√°₀-₉]/;
  if (mathy.test(l.inner) || mathy.test(r.inner)) return true;
  return isShortSymbol(l.inner) && isShortSymbol(r.inner);
}

export function withFractions(s: string): ReactNode {
  if (!s.includes('/')) return s;
  const out: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '/' || s[i + 1] === '/' || s[i - 1] === '/') continue;
    const l = leftOperand(s, i);
    const r = l && rightOperand(s, i);
    if (!l || !r || l.start < cursor || !isFraction(s, l, r, i)) continue;
    // A mixed number such as "14 2/7" keeps its whole part on the same line.
    if (l.start > cursor) out.push(s.slice(cursor, l.start).replace(/(\d) $/, '$1\u00a0'));
    const frac = (
      <span key={key++} className="frac">
        <span className="frac-num">{withFractions(l.inner)}</span>
        <span className="sr-only">/</span>
        <span className="frac-den">{withFractions(r.inner)}</span>
      </span>
    );
    // Keep closing punctuation ("x/y." or "2/7%") on the fraction's line instead of wrapping alone.
    const tail = /^[.,;:!?%)\]’”]+/.exec(s.slice(r.end))?.[0];
    out.push(
      tail ? (
        <span key={key++} className="whitespace-nowrap">
          {frac}
          {tail}
        </span>
      ) : (
        frac
      ),
    );
    cursor = r.end + (tail?.length ?? 0);
    i = r.end - 1;
  }
  if (!out.length) return s;
  if (cursor < s.length) out.push(s.slice(cursor));
  return out;
}
