/*
 * Visual registry. Every member of the Visual union needs an entry here (enforced by TypeScript).
 */
import type { ComponentType } from 'react';
import type { Visual, VisualType } from '@/content/types';
import { Stepper } from './Stepper';
import { ArrayTrace } from './ArrayTrace';
import { Diagram } from './Diagram';

type Registry = { [K in VisualType]: ComponentType<{ visual: Extract<Visual, { type: K }> }> };

export const visuals: Registry = {
  stepper: Stepper,
  arrayTrace: ArrayTrace,
  diagram: Diagram,
};

export function VisualView({ visual }: { visual: Visual }) {
  const Component = visuals[visual.type] as ComponentType<{ visual: Visual }>;
  return <Component visual={visual} />;
}
