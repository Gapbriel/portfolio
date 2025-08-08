import { challenges } from "@/data/challenges";
import ChallengeCard from "@/components/ChallengeCard";

export default function ChallengesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        React Practice Challenges
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        A growing list of small React components and patterns I’m building to
        sharpen my frontend skills.
      </p>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
