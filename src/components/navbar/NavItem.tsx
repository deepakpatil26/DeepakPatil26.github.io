import React from "react";
import { NavItemProps } from "./types";

export const NavItem = ({ href, label, className = "" }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`nav-link ${label.toLowerCase()} text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${className}`}
    >
      {label}
    </a>
  );
};
