"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Challenges", href: "/challenges" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-700 bg-[var(--background)] text-[var(--foreground)] backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <span className="text-xl font-semibold">Gabriel Panebianco</span>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
