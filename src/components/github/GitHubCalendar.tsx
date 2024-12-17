import React from "react";
import GitHubCalendarLib from "react-github-calendar";
import { useTheme } from "../../context/ThemeContext";
import { GitHubCalendarProps } from "./types";

const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username }) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center">
      <GitHubCalendarLib
        username={username}
        colorScheme={theme}
        className="react-activity-calendar"
      />
    </div>
  );
};

export default GitHubCalendar;
