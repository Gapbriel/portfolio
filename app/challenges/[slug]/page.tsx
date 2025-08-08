import React from "react";
import { notFound } from "next/navigation";
import { challenges } from "@/data/challenges";
import Link from "next/link";

// Importá tus desafíos reales
import Counter from "@/app/challenges/Counter";
// import ToDoList from '@/components/challenges/ToDoList'
// ...

// tabla: slug => componente correspondiente
const challengeComponents: Record<string, React.ReactElement> = {
  counter: <Counter />,
  // 'todo-list': <ToDoList />,
  // 'dark-mode-toggle': <DarkModeToggleChallenge />,
};

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ChallengeDetailPage({ params }: Props) {
  const { slug } = await params;
  const challenge = challenges.find((c) => c?.slug === slug);

  if (!challenge) return notFound();

  const ChallengeComponent = challengeComponents[slug] || null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/challenges"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
      >
        ← Back to challenges
      </Link>

      <h1 className="text-2xl font-bold mb-6">{challenge.title}</h1>

      {challenge.status === "soon" ? (
        <p className="text-gray-500 dark:text-gray-400">
          🚧 This challenge is coming soon.
        </p>
      ) : ChallengeComponent ? (
        ChallengeComponent
      ) : (
        <p className="italic text-gray-400">
          Challenge component not yet created.
        </p>
      )}
    </div>
  );
}
