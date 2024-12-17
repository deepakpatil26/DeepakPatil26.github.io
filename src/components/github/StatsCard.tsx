import React from "react";
import { StatsCardProps } from "./types";

const StatsCard: React.FC<StatsCardProps> = ({ id, src, alt }) => {
  return (
    <img id={id} src={src} alt={alt} className="w-full rounded-lg shadow-md" />
  );
};

export default StatsCard;
