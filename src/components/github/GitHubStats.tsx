import React from "react";
import GitHubCalendar from "./GitHubCalendar";
import { useTheme } from "../../context/ThemeContext";
import StatsCard from "./StatsCard";
import { StatsConfig } from "./types";

const GitHubStats: React.FC<{ username: string }> = ({ username }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const statsConfigs: StatsConfig[] = [
    {
      id: "github-streak-stats",
      src: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${
        isDark ? "dark" : "light"
      }`,
      alt: "GitHub Streak Stats",
    },
    {
      id: "github-top-langs",
      src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${
        isDark ? "dark" : "light"
      }`,
      alt: "Top Languages",
    },
    {
      id: "github-stats-card",
      src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${
        isDark ? "dark" : "light"
      }`,
      alt: "GitHub Stats",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          GitHub Statistics
        </h2>

        <div className="space-y-8">
          <GitHubCalendar username={username} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsConfigs.map((config) => (
              <StatsCard key={config.id} {...config} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
