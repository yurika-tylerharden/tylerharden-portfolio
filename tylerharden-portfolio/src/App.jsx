import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Music from './pages/Music';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const musicRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 80; // Adjust this value to match your Navbar height
    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* <div className="splash-screen"></div> */}
      <Navbar
        onScrollToSection={{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
          resume: () => scrollToSection(resumeRef),
          music: () => scrollToSection(musicRef),
        }}
      />

      <div ref={homeRef} >
        <Home />
      </div>
      <div ref={aboutRef} className="py-2">
        <About />
      </div>
      <div ref={projectsRef} className="py-2">
        <Projects />
      </div>
      <div ref={resumeRef} className="py-2">
        <Resume />
      </div>
      <div ref={musicRef} className="py-2">
        <Music />
      </div>
      <div ref={contactRef} className="py-2">
        <Contact />
      </div>
    </div>
  );
}

export default App;