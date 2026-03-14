/**
 * Utility for conditional classNames; similar to clsx or classnames.
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}