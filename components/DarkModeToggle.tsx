"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Detect SSR / Hydration
const isSSR = typeof window === "undefined";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply theme before paint
  useLayoutEffect(() => {
    if (isSSR) return;

    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const toggle = () => {
    const newTheme = !isDark;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDark(newTheme);
  };

  if (!mounted) return null; // avoid hydration issues

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 text-sm px-3 py-1 border rounded shadow hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className={isDark ? "text-yellow-400" : "text-blue-500"}
        >
          {isDark ? "☀️" : "🌙"}
        </motion.span>
      </AnimatePresence>
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
