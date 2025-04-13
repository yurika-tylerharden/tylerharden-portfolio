import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ onScrollToSection }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuItemClick = (section) => {
    onScrollToSection[section]();
    setIsMenuOpen(false); // Close menu after clicking
  };

  const menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Resume', section: 'resume' },
    { label: 'Music', section: 'music' },
    { label: 'Contact', section: 'contact' },
  ];

  return (
    <nav className={`bg-gray-100 py-4 px-6 sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <h3 className="text-xl font-bold">{'tylerharden.io'}</h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-gray-600"
              onClick={() => onScrollToSection[item.section]()}
            >
              {item.label}
            </li>
          ))}
          <li className="cursor-pointer hover:text-gray-600">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            {isMenuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
          className="fixed inset-0 z-40 bg-white/20 dark:bg-black/20 backdrop-blur-lg flex flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >
            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white dark:bg-gray-800 text-black dark:text-white text-lg px-6 py-3 rounded-full shadow-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleMenuItemClick(item.section)}
              >
                {item.label}
              </motion.div>
            ))}
            {/* Dark Mode Button inside Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
              className="bg-white dark:bg-gray-800 text-black dark:text-white text-lg px-6 py-3 rounded-full shadow-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;