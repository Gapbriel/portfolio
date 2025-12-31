"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import CompanyLogo from "./CompanyLogo";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-[var(--background)] text-[var(--foreground)] border border-neutral-200 dark:border-neutral-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4"
    >
      <CompanyLogo company={project.company} logo={project.logo} />

      <div className="flex-1">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-neutral-500 mb-1">
          {project.company} · {project.role} · {project.period}
        </p>

        <p className="text-sm mb-3 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
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
            className="text-sm text-blue-600 dark:text-blue-400 underline"
          >
            Visit project →
          </a>
        )}
      </div>
    </motion.div>
  );
}
