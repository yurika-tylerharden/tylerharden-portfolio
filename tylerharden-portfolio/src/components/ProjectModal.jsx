import React from 'react';
import Slider from 'react-slick';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const settings = {
    dots: project.images.length > 1,  // only show dots if multiple images
    infinite: project.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: project.images.length > 1  // hide arrows if only 1 image
  };

  // Handle background click
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };

  return (
    <div 
    id="modal-background" 
    onClick={handleBackgroundClick}
    className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 dark:bg-black/30 backdrop-blur-lg"
  >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-auto max-h-[90vh] w-[90%] md:w-[70%] lg:w-[50%] p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-2xl font-bold"
        >
          &times;
        </button>

        {/* Photo Carousel */}
        {project.images.length > 0 && (
          <div className="mb-6">
            <Slider {...settings}>
              {project.images.map((img, idx) => (
                <div key={idx}>
                  <img 
                    src={img} 
                    alt={`${project.title} screenshot ${idx + 1}`} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Project Details */}
        <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.year}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2">{project.subtitle}</h3>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {project.fullDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;