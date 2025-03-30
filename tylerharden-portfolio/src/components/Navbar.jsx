import { useState, useEffect } from 'react';

function Navbar({ onScrollToSection }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white dark:bg-darkBlue text-darkBlue dark:text-white shadow-md z-50">
      <div className="flex items-center">
        <span className="text-xl font-bold cursor-pointer" onClick={onScrollToSection.home}>
          Tyler Harden
        </span>
      </div>
      <div className="space-x-4">
        <button onClick={onScrollToSection.home} className="hover:text-gray-400">Home</button>
        <button onClick={onScrollToSection.about} className="hover:text-gray-400">About</button>
        <button onClick={onScrollToSection.projects} className="hover:text-gray-400">Projects</button>
        <button onClick={onScrollToSection.resume} className="hover:text-gray-400">Resume</button>
        <button onClick={onScrollToSection.music} className="hover:text-gray-400">Music</button>
        <button onClick={onScrollToSection.contact} className="hover:text-gray-400">Contact</button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;