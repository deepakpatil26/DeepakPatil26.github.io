import React from "react";
import { X } from "lucide-react";
import { NavItem } from "./NavItem";
import { navigationItems } from "./config";
import { MobileMenuProps } from "./types";

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          Portfolio
        </span>
        <button
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="p-4 flex flex-col space-y-4">
        {navigationItems.map((item) => (
          <NavItem key={item.href} {...item} onClick={onClose} />
        ))}
        <a
          href="https://drive.google.com/file/d/1mxW0X_GisxnsMBqmixCAKPW6x63aJyjd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link resume bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
          id="resume-link-1"
          onClick={onClose}
        >
          Resume
        </a>
      </nav>
    </div>
  );
};
