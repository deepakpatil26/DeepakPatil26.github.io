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
    <div className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="project-title text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="project-description text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="project-tech-stack flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-link flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <Github size={20} className="mr-2" />
            Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-deployed-link flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ExternalLink size={20} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
