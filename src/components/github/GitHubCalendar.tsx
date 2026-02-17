import React from "react";
import GitHubCalendarLib from "react-github-calendar";
import { useTheme } from "../../context/ThemeContext";
import { GitHubCalendarProps } from "./types";
import ErrorBoundary from "./ErrorBoundary";

const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <ErrorBoundary>
        <GitHubCalendarLib
          username={username}
          colorScheme={theme}
        />
      </ErrorBoundary>
    </div>
  );
};

export default GitHubCalendar;
