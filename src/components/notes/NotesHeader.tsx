import type { ReactNode } from 'react';

/** Page header for the handwritten-notes pages: a script title with a pen squiggle under it. */
export function NotesHeader({ kicker, title, children, actions }: { kicker: string; title: string; children?: ReactNode; actions?: ReactNode }) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex max-w-[640px] flex-col gap-2">
        <p className="text-accent-ink text-xs font-bold tracking-[0.1em] uppercase">{kicker}</p>
        <h1 className="font-script w-fit text-[52px] leading-none font-bold md:text-[68px]">
          <span className="squiggle">{title}</span>
        </h1>
        {children && <div className="text-muted-foreground text-[17px]">{children}</div>}
      </div>
      {actions && <div className="no-print flex flex-wrap gap-2">{actions}</div>}
    </header>
  );
}
