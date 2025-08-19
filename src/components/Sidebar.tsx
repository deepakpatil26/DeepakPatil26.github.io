import React from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <span className="text-xl font-bold text-gray-800">Portfolio</span>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <X size={24} />
        </button>
      </div>
      <nav className="p-4 flex flex-col space-y-4">
        <a
          href="#home"
          onClick={onClose}
          className="nav-link home text-gray-600 hover:text-gray-900"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={onClose}
          className="nav-link about text-gray-600 hover:text-gray-900"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={onClose}
          className="nav-link skills text-gray-600 hover:text-gray-900"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={onClose}
          className="nav-link projects text-gray-600 hover:text-gray-900"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={onClose}
          className="nav-link contact text-gray-600 hover:text-gray-900"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1OeqBZAmzwtP52YG0wyd7KPWqcLTUHxZr/view"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link resume bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
          id="resume-link-1"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
