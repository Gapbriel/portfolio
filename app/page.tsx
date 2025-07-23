"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Gabriel Panebianco 👋</h1>
      <p className="text-lg text-gray-600 mb-4">
        Frontend Developer with over 13 years of experience building interfaces
        using React, Vue, and other modern tools. Passionate about performance,
        clean code and elegant UI architecture.
      </p>
      <p className="text-base text-gray-500">
        I’ve worked with clients like Deloitte, PwC, and Sessionboard. My focus
        is creating responsive, maintainable, and user-centered applications.
      </p>
    </motion.section>
  );
}
