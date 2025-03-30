# Tyler Harden Portfolio

This is a personal portfolio website built using React, Vite, and Tailwind CSS. The project showcases my work, experiences, and skills in a visually appealing and responsive manner.

## Project Structure

The project is organized as follows:

```
personal-portfolio
├── .gitignore          # Specifies files to be ignored by Git
├── LICENSE             # Licensing information for the project
├── README.md           # Documentation for the project
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
├── postcss.config.js   # Configuration for PostCSS
├── tailwind.config.js   # Configuration for Tailwind CSS
├── vite.config.js      # Configuration for Vite
├── public
│   └── favicon.svg     # Favicon for the website
└── src
    ├── App.jsx         # Main application layout with routing
    ├── App.css         # Custom styles for the application
    ├── index.css       # Base styles including Tailwind CSS imports
    ├── main.jsx        # Entry point of the React application
    ├── components
    │   └── Navbar.jsx  # Navbar component with navigation links
    ├── pages
    │   ├── About.jsx   # About page component
    │   ├── Contact.jsx # Contact page component
    │   ├── Home.jsx    # Home page component
    │   └── Projects.jsx # Projects page component
    └── assets
        └── logo.svg    # Logo image used in the site
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-portfolio
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Features

- Responsive design using Tailwind CSS
- React Router for seamless navigation between pages
- Components for modular and reusable code
- Custom styling for a unique look and feel

## License

This project is licensed under the MIT License. See the LICENSE file for more details.