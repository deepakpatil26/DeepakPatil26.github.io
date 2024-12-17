import React from "react";

interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image }) => {
  return (
    <div className="skills-card flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <img src={image} alt={name} className="skills-card-img w-16 h-16 mb-4" />
      <h3 className="skills-card-name text-lg font-medium text-gray-900 dark:text-white">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;
