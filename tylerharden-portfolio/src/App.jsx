import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Music from './pages/Music';
import SplashScreen from './components/SplashScreen';
import Timeline from './components/Timeline';

function App() {
  const [splashDone, setSplashDone] = useState(false); // <- has the splash been exited yet?

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const musicRef = useRef(null);
  
  const scrollToFirstSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  const scrollToSection = (ref) => {
    
    const offset = 80;
    const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  // useEffect(() => {
  //   if (splashDone) return;

  //   const handleScroll = () => {
  //     if (window.scrollY > window.innerHeight * 0.2) {
  //       // if user scrolls down a little bit (20% of the screen height)
  //       setSplashDone(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [splashDone]);

  return (
    <div>
      {/* {!splashDone && (
        <SplashScreen onFinishSplashScreen={() => setSplashDone(true)} />
      )} */}

      {/* {splashDone && ( */}
        <>
          <Navbar
            onScrollToSection={{
              about: () => scrollToSection(aboutRef),
              projects: () => scrollToSection(projectsRef),
              contact: () => scrollToSection(contactRef),
              resume: () => scrollToSection(resumeRef),
              music: () => scrollToSection(musicRef),
            }}
          />
          <div ref={aboutRef} className="">
            <Home scrollToAbout={() => scrollToSection(aboutRef)} />
          </div>
          <div ref={aboutRef} className="pt-2">
            <About />
          </div>
          <div ref={projectsRef} className="py-2">
            <Projects />
          </div>
          <div ref={resumeRef} className="py-2">
            <Resume />
            <Timeline />
          </div>
          <div ref={musicRef} className="py-2">
            <Music />
          </div>
          <div ref={contactRef} className="py-2">
            <Contact />
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default App;