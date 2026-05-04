/**
 * 🛡️ KIP PATTERN - THE GATE (index.ts)
 *
 * This is the ONLY public API for the Button component.
 * Everything else in this folder is private implementation detail.
 *
 * Think of this as the "package.json exports" field for your component.
 * Only what you explicitly export here is available to the outside world.
 *
 * LEVEL 1 EXAMPLE:
 * - Simple components typically export just the component and its props type
 * - Internal implementation details (_component.tsx, _type.ts) remain hidden
 */

export { Button } from './_component';
export type { ButtonProps, ButtonVariant, ButtonSize } from './_type';
