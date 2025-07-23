"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {project.company} · {project.role} · {project.period}
      </p>
      <p className="text-sm text-gray-700 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm underline"
        >
          View project →
        </a>
      )}
    </motion.div>
  );
}
