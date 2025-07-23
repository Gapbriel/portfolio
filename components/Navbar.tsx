"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 border-b border-neutral-200 dark:border-neutral-700 bg-[var(--background)] text-[var(--foreground)]">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <span className="text-xl font-semibold">Gabriel Panebianco</span>
        <ul className="flex space-x-6 text-sm font-medium">
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
        <DarkModeToggle />
      </nav>
    </header>
  );
}
