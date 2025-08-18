import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav
        id="nav-menu"
        className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-40 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a
                href="#home"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                Portfolio
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="nav-link home text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link about text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="nav-link skills text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="nav-link projects text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="nav-link contact text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Contact
              </a>
              <a
                href="/DeepakPatil_Resume-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link resume bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90"
                id="resume-link-1"
              >
                Resume
              </a>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};
