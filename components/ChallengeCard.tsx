"use client";

import { Challenge } from "@/data/challenges";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const statusStyle = {
    done: "bg-green-100 text-green-700",
    "in-progress": "bg-yellow-100 text-yellow-700",
    soon: "bg-gray-200 text-gray-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/challenges/${challenge.slug}`}
        className="block border rounded-md p-4 bg-[var(--background)] text-[var(--foreground)] hover:shadow transition"
      >
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{challenge.title}</h3>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              statusStyle[challenge.status]
            }`}
          >
            {challenge.status === "done"
              ? "✅ Done"
              : challenge.status === "in-progress"
              ? "🚧 In Progress"
              : "🕓 Soon"}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
