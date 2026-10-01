import { ArrowRight, Info } from 'lucide-react';
import { EXAM_CHECKED, papers, sectionTips, tierComparison } from '@/content/exam';
import { subjectHref } from '@/lib/useHashRoute';
import { tintStyle } from '@/lib/tint';
import { Card } from '@/components/ui/card';
import { ComparisonView } from './ComparisonView';

export function ExamPage() {
  return (
    <div className="flex flex-col gap-7">
      <header className="flex max-w-[640px] flex-col gap-2.5">
        <p className="text-accent-ink text-xs font-bold tracking-[0.1em] uppercase">SSC CGL</p>
        <h1 className="text-[40px] leading-none font-extrabold tracking-[-0.03em] md:text-[56px]">Exam pattern</h1>
        <p className="text-muted-foreground text-[17px]">
          Two tiers. Tier 1 screens, Tier 2 ranks. Both test the same four subjects; Tier 2 adds Computer Knowledge, a typing test and, for some
          posts, a Statistics or Finance paper.
        </p>
        <p className="text-muted-foreground flex items-start gap-1.5 text-[13px]">
          <Info className="mt-0.5 size-3.5 flex-none" aria-hidden="true" />
          {EXAM_CHECKED}
        </p>
      </header>

      {papers.map((paper, i) => (
        <section key={paper.id} style={tintStyle(i)} className="tint bg-tint border-tint-border border-t-tint-strong flex flex-col gap-3 rounded-xl border border-t-4 p-4 sm:p-5">
          <div>
            <h2 className="text-2xl font-extrabold">{paper.name}</h2>
            <p className="text-muted-foreground text-[15px]">{paper.who}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="text-muted-foreground border-tint-border border-b text-xs tracking-[0.06em] uppercase">
                  <th className="hidden py-2 pr-3 font-bold sm:table-cell">Part</th>
                  <th className="py-2 pr-3 font-bold">Subject</th>
                  <th className="py-2 pr-3 text-right font-bold">
                    <abbr title="Questions" className="no-underline sm:hidden">Qs</abbr>
                    <span className="hidden sm:inline">Questions</span>
                  </th>
                  <th className="py-2 pr-3 text-right font-bold">Marks</th>
                  <th className="py-2 text-right font-bold">Time</th>
                </tr>
              </thead>
              <tbody>
                {paper.rows.map((r) => (
                  <tr key={r.part} className="border-tint-border/60 border-b last:border-b-0">
                    <td className="text-muted-foreground hidden py-2 pr-3 sm:table-cell">{r.part}</td>
                    <td className="py-2 pr-3 font-semibold">
                      {r.subjectId ? (
                        <a href={subjectHref(r.subjectId)} className="hover:text-tint-ink inline-flex items-center gap-1 hover:underline">
                          {r.subject} <ArrowRight className="size-3.5 opacity-60" aria-hidden="true" />
                        </a>
                      ) : (
                        r.subject
                      )}
                      <span className="text-muted-foreground block text-xs font-normal sm:hidden">{r.part}</span>
                    </td>
                    <td className="py-2 pr-3 text-right tabular-nums">{r.marks ? r.questions : '—'}</td>
                    <td className="py-2 pr-3 text-right tabular-nums">{r.marks || '—'}</td>
                    <td className="py-2 text-right whitespace-nowrap tabular-nums">{r.time}</td>
                  </tr>
                ))}
                {paper.total && (
                  <tr className="font-bold">
                    <td className="py-2 pr-3">Total</td>
                    <td className="hidden sm:table-cell" />
                    <td className="py-2 pr-3 text-right tabular-nums">{paper.total.questions}</td>
                    <td className="py-2 pr-3 text-right tabular-nums">{paper.total.marks}</td>
                    <td className="py-2 text-right whitespace-nowrap tabular-nums">{paper.total.time}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="text-[15px]">
            <strong>Marking:</strong> {paper.marking}
          </p>
          <ul className="marker:text-tint-strong flex list-disc flex-col gap-1 pl-5 text-[14.5px]">
            {paper.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      ))}

      <ComparisonView comparison={tierComparison} />

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-extrabold">Using your time in each section</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-3">
          {sectionTips.map((t) => (
            <Card key={t.title} className="gap-1.5 p-4">
              <h3 className="text-base font-bold">{t.title}</h3>
              <p className="text-muted-foreground text-sm">{t.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
