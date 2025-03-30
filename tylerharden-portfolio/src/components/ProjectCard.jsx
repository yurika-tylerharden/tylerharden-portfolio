import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.year}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-semibold px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
    </div>
  );
};

export default ProjectCard;