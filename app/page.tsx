"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center mb-6"
      >
        <Image
          src="/profile.png"
          alt="Gabriel Panebianco"
          width={250}
          height={250}
          className="rounded-full border border-gray-300 dark:border-zinc-600 shadow-sm"
          priority
        />
      </motion.div>

      <h1 className="text-4xl font-bold mb-6">Hi, I’m Gabriel Panebianco 👋</h1>

      <p className="text-lg text-[var(--foreground)]/90 mb-4">
        I'm a Frontend Developer with over 13 years of experience building user
        interfaces for high-impact platforms in finance, travel, and e-commerce.
        I’ve delivered pixel-perfect, scalable web applications for top-tier
        clients like
        <strong> PWC, Deloitte, Wells Fargo</strong>, and{" "}
        <strong>Sessionboard</strong>.
      </p>

      <p className="text-base text-[var(--foreground)]/80 mb-4">
        I specialize in React, Vue, and modern JavaScript frameworks. My focus
        is performance optimization, architecture design, and crafting
        responsive user experiences that scale. I’ve led UI initiatives from
        scratch, mentored junior developers, and worked closely with
        cross-functional teams to ship high-quality software.
      </p>

      <p className="text-base text-[var(--foreground)]/80 mb-4">
        I'm based in Mar del Plata, Argentina, and I’m looking for long-term
        opportunities where I can bring energy, clarity, and technical
        excellence to a collaborative team that values clean code, performance,
        and thoughtful design.
      </p>

      <Link
        href="/projects"
        className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        → View my projects
      </Link>
    </motion.section>
  );
}
