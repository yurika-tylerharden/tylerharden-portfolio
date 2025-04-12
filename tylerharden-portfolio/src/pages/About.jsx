import React from 'react';

const About = () => {
  return (
    // <div className="max-w-4xl mx-auto p-6">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hi, I'm Tyler Harden, a passionate developer with a love for creating
        dynamic and responsive web applications. With a background in computer
        science and a keen interest in modern web technologies, I strive to
        build user-friendly interfaces that provide seamless experiences.
      </p>
      <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Started coding at a young age, exploring various programming languages.</li>
        <li>Graduated with a degree in Computer Science.</li>
        <li>Worked on multiple projects, honing my skills in React, Vite, and Tailwind CSS.</li>
        <li>Currently focused on building my portfolio and contributing to open-source projects.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Interests</h2>
      <p>
        In addition to web development, I enjoy music production, hiking, and
        exploring new technologies. I believe in continuous learning and
        strive to stay updated with the latest trends in the tech industry.
      </p>
    </div>
  );
};

export default About;