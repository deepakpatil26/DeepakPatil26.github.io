import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  github,
  demo,
}) => {
  return (
    <div className="group bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm font-medium">Click to view details</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium border border-blue-100 dark:border-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={18} className="mr-1.5" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Live Demo
            <ExternalLink size={18} className="ml-1.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
