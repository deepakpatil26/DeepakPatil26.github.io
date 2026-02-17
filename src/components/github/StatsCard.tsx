import React, { useState } from "react";
import { StatsCardProps } from "./types";

const StatsCard: React.FC<StatsCardProps> = ({ id, src, alt }) => {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  if (status === "error") {
    return (
      <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 min-h-[150px]">
        <p className="text-sm text-gray-500 text-center italic">
          {alt} currently unavailable
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-[150px]">
      {status === "loading" && (
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      )}
      <img
        id={id}
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full rounded-lg shadow-md transition-opacity duration-300 ${status === "success" ? "opacity-100" : "opacity-0"
          }`}
        onLoad={() => setStatus("success")}
        onError={() => setStatus("error")}
      />
    </div>
  );
};

export default StatsCard;
