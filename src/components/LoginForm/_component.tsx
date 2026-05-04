/**
 * 🛡️ KIP PATTERN - LEVEL 2: MEDIUM COMPONENT
 *
 * The LoginForm component - pure UI presentation.
 * Notice how clean this is: no business logic, no validation, no API calls.
 * All of that complexity is hidden in _hook.ts and _util.ts.
 * Styles are separated into _style.ts for better organization.
 *
 * This component is just concerned with rendering and user interaction.
 */

import type { LoginFormProps } from './_type';
import { useLoginForm } from './_hook';
import { styles } from './_style';

export function LoginForm({ onSuccess, onError, showRememberMe = true }: LoginFormProps) {
  const { formState, updateField, handleSubmit } = useLoginForm(onSuccess, onError);

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.fieldGroup}>
        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formState.email}
          onChange={(e) => updateField('email', e.target.value)}
          disabled={formState.isSubmitting}
          style={{
            ...styles.input,
            ...(formState.errors.email ? styles.inputError : {}),
          }}
          placeholder="demo@example.com"
        />
        {formState.errors.email && (
          <span style={styles.errorText}>{formState.errors.email}</span>
        )}
      </div>

      <div style={styles.fieldGroup}>
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          value={formState.password}
          onChange={(e) => updateField('password', e.target.value)}
          disabled={formState.isSubmitting}
          style={{
            ...styles.input,
            ...(formState.errors.password ? styles.inputError : {}),
          }}
          placeholder="password"
        />
        {formState.errors.password && (
          <span style={styles.errorText}>{formState.errors.password}</span>
        )}
      </div>

      {showRememberMe && (
        <div style={styles.checkboxGroup}>
          <input
            id="rememberMe"
            type="checkbox"
            checked={formState.rememberMe}
            onChange={(e) => updateField('rememberMe', e.target.checked)}
            disabled={formState.isSubmitting}
            style={styles.checkbox}
          />
          <label htmlFor="rememberMe" style={styles.checkboxLabel}>
            Remember me
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={formState.isSubmitting}
        style={{
          ...styles.submitButton,
          ...(formState.isSubmitting ? styles.submitButtonDisabled : {}),
        }}
      >
        {formState.isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
