/**
 * 🛡️ KIP PATTERN - THE GATE (index.ts)
 *
 * LEVEL 2 EXAMPLE:
 * - Medium components export the component, its props, and sometimes the hook
 * - Notice we're NOT exporting the utility functions (_util.ts)
 * - Those are truly private implementation details
 *
 * Decision: Should we export useLoginForm?
 * - YES if other components might need the same login logic
 * - NO if it's truly specific to this component's internal needs
 *
 * For this example, we'll export it to show flexibility.
 */

export { LoginForm } from './_component';
export { useLoginForm } from './_hook';
export type { LoginFormProps, LoginFormData } from './_type';
