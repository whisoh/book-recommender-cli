"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setDark(document.documentElement.classList.contains("dark"));
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="ml-4 px-2 py-1 rounded border dark:border-gray-600 border-gray-300 dark:bg-gray-700 bg-white text-gray-900 dark:text-gray-100"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
