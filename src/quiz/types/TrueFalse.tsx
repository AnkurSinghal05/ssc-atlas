import type { TrueFalseQuestion } from '@/content/types';
import { CodeBlock } from '@/components/CodeBlock';
import { RichText } from '@/lib/RichText';
import { FigureSvg } from '@/visuals/Figure';
import { Choices } from '../Choices';
import type { QuizRenderProps } from '../registry';

const OPTIONS = [
  <span className="block text-center font-semibold">True</span>,
  <span className="block text-center font-semibold">False</span>,
];

export function TrueFalseQuiz({ question: q, onAnswer }: QuizRenderProps<TrueFalseQuestion>) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg font-semibold">
        <RichText text={q.statement} />
      </p>
      {q.figure && <FigureSvg figure={q.figure} className="w-full max-w-[420px] self-center rounded-md border bg-[var(--paper)] p-3" />}
      {q.code && <CodeBlock code={q.code} />}
      <Choices
        keepOrder
        className="max-w-[340px] grid-cols-2 sm:grid-cols-2"
        answer={q.answer ? 0 : 1}
        onAnswer={onAnswer}
        options={OPTIONS}
      />
    </div>
  );
}
