/**
 * 🛡️ KIP PATTERN - LEVEL 2: MEDIUM COMPONENT
 *
 * Private utility functions specific to LoginForm.
 * These helpers are NOT generic - they're tailored for THIS component's needs.
 *
 * ⚠️ ANTI-PATTERN: Putting these in src/utils/ would pollute the global namespace.
 * ✅ KIP WAY: Keep component-specific utilities private to the component.
 */

/**
 * Validates an email address format
 * This is specific to LoginForm's validation rules
 */
export function validateEmail(email: string): string | undefined {
  if (!email) {
    return 'Email is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }

  return undefined;
}

/**
 * Validates password strength
 * LoginForm-specific rules: minimum 6 characters
 */
export function validatePassword(password: string): string | undefined {
  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return undefined;
}

/**
 * Simulates an API call for login
 * In a real app, this would call your backend
 */
export async function mockLoginAPI(email: string, password: string): Promise<void> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate validation
  if (email === 'demo@example.com' && password === 'password') {
    return Promise.resolve();
  }

  throw new Error('Invalid credentials. Try demo@example.com / password');
}
