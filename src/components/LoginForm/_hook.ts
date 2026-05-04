/**
 * 🛡️ KIP PATTERN - LEVEL 2: MEDIUM COMPONENT
 *
 * Custom hook encapsulating LoginForm's business logic.
 * This is where the "brain" of the component lives - state management, validation, submission.
 *
 * By extracting this into _hook.ts, we keep _component.tsx focused purely on UI.
 * This hook is PRIVATE - only LoginForm should use it.
 */

import { useState } from 'react';
import type { FormState, LoginFormData } from './_type';
import { validateEmail, validatePassword, mockLoginAPI } from './_util';

export function useLoginForm(
  onSuccess?: (data: LoginFormData) => void,
  onError?: (error: string) => void
) {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    rememberMe: false,
    errors: {},
    isSubmitting: false,
  });

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
      // Clear error when user starts typing
      errors: {
        ...prev.errors,
        [field]: undefined,
      },
    }));
  };

  const validateForm = (): boolean => {
    const emailError = validateEmail(formState.email);
    const passwordError = validatePassword(formState.password);

    if (emailError || passwordError) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          email: emailError,
          password: passwordError,
        },
      }));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    try {
      await mockLoginAPI(formState.email, formState.password);

      const loginData: LoginFormData = {
        email: formState.email,
        password: formState.password,
        rememberMe: formState.rememberMe,
      };

      onSuccess?.(loginData);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      onError?.(errorMessage);
      setFormState((prev) => ({
        ...prev,
        errors: {
          email: errorMessage,
        },
      }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  return {
    formState,
    updateField,
    handleSubmit,
  };
}
