import { useEffect, useState } from 'react';

/**
 * Hash routes:  #<subjectId>                   subject overview
 *               #<subjectId>.<topicId>         topic page
 *               #<subjectId>.<topicId>.recap   5-minute recap of a topic
 *               #exam, #formulas, #high-yield  site-wide pages
 * Hash routing works on any static host (Vercel, S3, GitHub Pages) with no rewrite rules.
 */
export function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1));
  useEffect(() => {
    const onChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const [subjectId, topicId, view] = decodeURIComponent(hash).split('.');
  return { subjectId: subjectId || undefined, topicId: topicId || undefined, view: view || undefined };
}

export const subjectHref = (subjectId: string) => `#${subjectId}`;
export const topicHref = (subjectId: string, topicId: string) => `#${subjectId}.${topicId}`;
export const recapHref = (subjectId: string, topicId: string) => `#${subjectId}.${topicId}.recap`;

/** Site-wide pages that are not a subject. */
export const PAGES = ['exam', 'formulas', 'high-yield'] as const;
export type PageId = (typeof PAGES)[number];
export const isPage = (id?: string): id is PageId => PAGES.includes(id as PageId);
