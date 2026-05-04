/**
 * 🛡️ KIP PATTERN - LEVEL 2: MEDIUM COMPONENT
 *
 * Type definitions for the LoginForm component.
 * As complexity grows, we have more types to manage - but they stay PRIVATE.
 */

export interface LoginFormProps {
  /**
   * Callback fired when login is successful
   */
  onSuccess?: (data: LoginFormData) => void;

  /**
   * Callback fired when login fails
   */
  onError?: (error: string) => void;

  /**
   * Whether to show the "Remember me" checkbox
   * @default true
   */
  showRememberMe?: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface FormState {
  email: string;
  password: string;
  rememberMe: boolean;
  errors: {
    email?: string;
    password?: string;
  };
  isSubmitting: boolean;
}
