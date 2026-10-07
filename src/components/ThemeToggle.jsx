import React from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-primary/20 hover:text-primary"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun size={15} />
      ) : (
        <Moon size={15} />
      )}
    </button>
  );
}