import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">I'm Tyler Harden, a passionate developer.</p>
      <div className="flex space-x-4">
        <a href="#projects" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Projects
        </a>
        <a href="#about" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          About Me
        </a>
        <a href="#contact" className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;