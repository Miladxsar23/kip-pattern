/**
 * 🛡️ KIP PATTERN - LEVEL 1: SIMPLE COMPONENT
 *
 * This is the actual Button component implementation.
 * It's marked as PRIVATE (_component.tsx) and encapsulates all UI logic.
 *
 * Notice how clean this file is - no type definitions cluttering the component.
 * Types live in _type.ts, keeping concerns separated.
 */

import type { ButtonProps } from "./_type";

export function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
}: ButtonProps) {
  // Variant styles
  const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    ghost:
      "bg-transparent hover:bg-gray-700 text-gray-300 border border-gray-600",
  };

  // Size styles
  const sizeStyles: Record<string, string> = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const baseStyles =
    "rounded-md font-medium transition-colors duration-200 cursor-pointer";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabledStyles}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}
