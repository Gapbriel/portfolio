"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const getUniqueTags = () => {
  const tags = new Set<string>();
  projects.forEach((proj) => proj.tech.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const tags = getUniqueTags();

  const filteredProjects = filter
    ? projects.filter((p) => p.tech.includes(filter))
    : projects;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Selected Projects & Experience
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setFilter(null)}
          className={`px-3 py-1 rounded-full text-sm border transition ${
            !filter
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-700"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded-full text-sm border transition ${
              filter === tag
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
          No projects found with this stack.
        </p>
      )}
    </div>
  );
}
