import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <span className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</span>
        <button onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
          <X size={24} />
        </button>
      </div>
      <nav className="p-4 flex flex-col space-y-4">
        <a
          href="#home"
          onClick={onClose}
          className="nav-link home text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={onClose}
          className="nav-link about text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          About
        </a>
        <a
          href="#skills"
          onClick={onClose}
          className="nav-link skills text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={onClose}
          className="nav-link projects text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={onClose}
          className="nav-link contact text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1tpWYzZKozomn3lQS50iWP08Modl1Ayyg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link resume bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 text-center"
          id="resume-link-1"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
