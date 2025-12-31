"use client";

import Image from "next/image";

type Props = {
  company: string;
  logo?: string;
};

export default function CompanyLogo({ company, logo }: Props) {
  // Extract initials from company name
  const getInitials = (name: string) => {
    const words = name.split(/[\s/]/);
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Generate a consistent color based on company name
  const getColor = (name: string) => {
    const colors = [
      "bg-blue-600",
      "bg-green-600",
      "bg-purple-600",
      "bg-pink-600",
      "bg-indigo-600",
      "bg-teal-600",
      "bg-orange-600",
      "bg-cyan-600",
    ];
    const index =
      name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };

  const initials = getInitials(company);
  const colorClass = getColor(company);

  // If logo exists and starts with http, try to load it
  // Otherwise show initials
  if (logo && logo.startsWith("http")) {
    return (
      <div className="min-w-[80px] flex-shrink-0">
        <div className="relative w-[80px] h-[80px]">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={80}
            height={80}
            className="rounded border border-neutral-300 dark:border-neutral-600 object-cover"
            onError={(e) => {
              // On error, hide the image and show initials fallback
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-[80px] h-[80px] ${colorClass} rounded border border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                    <span class="text-white text-2xl font-bold">${initials}</span>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
    );
  }

  // If logo is a local path
  if (logo) {
    return (
      <div className="min-w-[80px] flex-shrink-0">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={80}
          height={80}
          className="rounded border border-neutral-300 dark:border-neutral-600 object-cover"
        />
      </div>
    );
  }

  // Fallback to initials
  return (
    <div className="min-w-[80px] flex-shrink-0">
      <div
        className={`w-[80px] h-[80px] ${colorClass} rounded border border-neutral-300 dark:border-neutral-600 flex items-center justify-center`}
      >
        <span className="text-white text-2xl font-bold">{initials}</span>
      </div>
    </div>
  );
}

