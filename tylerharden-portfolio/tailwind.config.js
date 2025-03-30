/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode using the 'class' strategy
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          darkBlue: '#00008B', // Add the dark blue color
        },
      },
    },
    plugins: [],
  };