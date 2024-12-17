import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubStats = () => {
  const username = "deepakpatil26";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          GitHub Statistics
        </h2>

        <div className="space-y-8">
          <div className="flex justify-center">
            <GitHubCalendar
              username={username}
              colorScheme="light"
              className="react-activity-calendar"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              id="github-streak-stats"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=light`}
              alt="GitHub Streak Stats"
              className="w-full"
            />

            <img
              id="github-top-langs"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=light`}
              alt="Top Languages"
              className="w-full"
            />

            <img
              id="github-stats-card"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=light`}
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
