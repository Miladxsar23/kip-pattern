/**
 * 🛡️ KIP PATTERN - LEVEL 1: SIMPLE COMPONENT
 *
 * This file contains the TypeScript types/interfaces for the Button component.
 * It's marked as PRIVATE (_type.ts) and should NEVER be imported directly from outside.
 *
 * ❌ BAD:  import { ButtonProps } from './components/Button/_type'
 * ✅ GOOD: import { ButtonProps } from './components/Button'
 */

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;

  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}
