"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Minimal dark/light toggle; swap classes for your theme logic
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return (
    <button
      className={className}
      aria-label="Toggle dark mode"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

export default ThemeToggle;