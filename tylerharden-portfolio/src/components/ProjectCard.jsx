import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer   hover: transition duration-300 hover:-translate-y-1 hover:scale-105 transform"
    >
      {/* Thumbnail */}
      <div className="relative w-full">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Project Details */}
      <div className="p-6 text-left">
        <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.year}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};
export default ProjectCard;