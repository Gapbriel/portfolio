"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiFramer,
  SiVercel
} from "react-icons/si";
import { Sparkles, Wand2 } from "lucide-react";

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
        I'm based in Mar del Plata, Argentina, and I'm looking for long-term
        opportunities where I can bring energy, clarity, and technical
        excellence to a collaborative team that values clean code, performance,
        and thoughtful design.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6">Built With</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <SiNextdotjs className="w-10 h-10 text-black dark:text-white" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Next.js</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <SiReact className="w-10 h-10 text-[#61DAFB]" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">React</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <SiTypescript className="w-10 h-10 text-[#3178C6]" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">TypeScript</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Tailwind</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <SiFramer className="w-10 h-10 text-[#0055FF] dark:text-[#4D94FF]" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Framer</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <SiVercel className="w-10 h-10 text-black dark:text-white" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Vercel</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <Wand2 className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Cursor</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition-all hover:shadow-lg dark:hover:bg-zinc-700"
          >
            <Sparkles className="w-10 h-10 text-orange-500 dark:text-orange-400" />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Claude</span>
          </motion.div>
        </div>
      </motion.div>

      <Link
        href="/projects"
        className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        → View my projects
      </Link>
    </motion.section>
  );
}
