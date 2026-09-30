# SSC Atlas

Interactive study site for the **SSC CGL** exam (Tier 1 and Tier 2). A concept map per subject, and for each topic short
key-idea cards, comparison tables, a shortcut ladder (standard method, shortcut, option elimination), flashcards and a
practice quiz. Built from the [Interview Atlas](https://github.com/AnkurSinghal05/interview-atlas) code.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · lucide icons. No backend.

```bash
npm install
npm run dev            # local dev server
npm run build          # production build in dist/ (deploy this, e.g. Vercel auto-detects Vite)
npm run build:preview  # single self-contained HTML file in dist-singlefile/
npm run typecheck
npm run verify         # content checks: comparison tables, quiz answer indexes, shortcut answers
```

Routing is hash-based (`#quant.percentage`, `#exam`), so any static host works without rewrite rules.

## What is on the site

- **Tier switcher** (All / Tier 1 / Tier 2) in the sidebar filters every map and topic list. Computer and Statistics are Tier 2 only.
- **Exam pattern** page (`#exam`): Tier 1 and Tier 2 tables, marking, a Tier 1 vs Tier 2 comparison, and time tips.
  The data lives in `src/content/exam.ts`; re-check it against the latest notice on ssc.gov.in each cycle.
- **Subject map**: areas as coloured cards, topics with priority star, weightage ("~2 Qs per shift"), learn and revise
  times, and a priority filter. Clicking a topic opens a pop-up preview.
- **Topic page** tabs: Learn (key ideas with formulas and examples, comparisons), Shortcuts (Quant and Reasoning),
  Flashcards, Practice.

## Layout

```
src/
  content/
    types.ts                 content format (Subject > Category > Topic)
    exam.ts                  CGL scheme of examination
    registry.ts              discovers subjects automatically, lazy-loads each one
    helpers.ts               planned(), stub(), isReady(), time and weightage helpers
    subjects/<id>/meta.ts    name, glyph, accent colour, order, tiers (loaded up front)
    subjects/<id>/index.ts   areas and topic outline (loaded on demand)
    subjects/<id>/topics/*.ts  one file per written topic
  quiz/                      quiz types + registry
  visuals/                   visual widgets + registry
  components/                pages and pieces; components/ui = shadcn/ui components
  lib/                       rich text, routing, colour mode, tier filter, scores
```

Subjects: `quant` (QA), `reasoning` (GI), `english` (EN), `ga` (GA), `computer` (CK, Tier 2), `statistics` (ST, Tier 2 Paper II).

## Write a topic

Every topic starts on the map as `planned(id, title, level, learnMinutes, reviseMinutes, priority, { weightage, tiers })`
in its subject's `index.ts`. To write it, add `topics/<id>.ts` exporting a `Topic` (copy `quant/topics/percentage.ts`),
import it in `index.ts` and put it in place of the `planned(...)` line.

A topic can have:
- `patterns`: the question types the topic is asked as, each with a `frequency` (`most` is highlighted as "Most asked").
- `keyPoints`: 4 to 8 cards, each with `title`, `text`, and optional `formula` and `example`.
- `comparisons`: "X vs Y" tables with aspect rows, `reveal` and `whenToUse`. Mark the row that holds the real difference with `key: true`.
- `shortcuts` (Quant, Reasoning): a question pattern with an example, options and a `ladder` of rungs, slowest first, each with steps and seconds.
- `qa`: flashcards, answers as 2 to 4 short points, optional tag ("Asked often", "Trap", "Shortcut").
- `quiz`: `mcq` and `truefalse` questions with `difficulty`, `explain`, optional `shortcut`, and `pyq` only for a verified previous-year question.

Fractions: write `a/b` with no spaces around the slash and brackets around a multi-term part, e.g. `(a + b)/(a − b)`.
RichText draws it as a stacked fraction with a horizontal bar (see `src/lib/RichText.tsx`). Units like km/h stay as they are.

Areas can carry a `section` (Quant uses Basic and Advanced) to group them under a heading on the map and in the sidebar.

Rules: work out and check every numeric answer before adding it, and never add a `pyq` label you cannot verify.

## Add a quiz type
1. Add an interface to the `QuizQuestion` union in `src/content/types.ts`.
2. Add a component in `src/quiz/types/` and register it in `src/quiz/registry.tsx`.
TypeScript fails the build until step 2 is done, so a type can't be half-added.

## Add a visual
Same pattern: extend the `Visual` union, then register a component in `src/visuals/registry.tsx`.

## Roadmap (from the blueprint)
1. Shell, tier switcher, maps and topic pages. **Done.**
2. Topic content, MCQ and true/false. **In progress: Quant complete (all 30 topics); 5 topics each in Reasoning, English and GA.**
3. New quiz types: error-spot, fill-blank, match, series, rc-set, di-set.
4. Practice hub: sectional tests and full mocks with CGL marking.
5. Progress, revision mode (spaced repetition), formula sheet.
6. Current affairs, updated monthly.
