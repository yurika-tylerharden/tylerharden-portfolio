import { useState, useEffect } from 'react';

function Navbar({ onScrollToSection }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowBrand(true);  // wait 4 seconds or so to show brand
  //   }, 4000); // adjust timing to match Home animation

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <nav className={`bg-gray-100 py-4 px-6 sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl font-bold">{'tylerharden.io'}</h3>
        <ul className="flex space-x-6 text-sm font-medium">
        <li className="cursor-pointer hover:text-gray-600" onClick={onScrollToSection.home}>
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-600" onClick={onScrollToSection.about}>
            About
          </li>
          <li className="cursor-pointer hover:text-gray-600" onClick={onScrollToSection.projects}>
            Projects
          </li>
          <li className="cursor-pointer hover:text-gray-600" onClick={onScrollToSection.resume}>
            Resume
          </li>
          <li className="cursor-pointer hover:text-gray-600" onClick={onScrollToSection.music}>
            Music
          </li>
          <li className="cursor-pointer hover:text-gray-600" onClick={onScrollToSection.contact}>
            Contact
          </li>
          <li className="cursor-pointer hover:text-gray-600">
              <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;