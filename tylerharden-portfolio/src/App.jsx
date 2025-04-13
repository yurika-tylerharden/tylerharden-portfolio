import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Music from './pages/Music';
import SplashScreen from './components/SplashScreen';
import Section from './components/Section';
// import './App.css'

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
    <div className="App bg-gray-100 dark:bg-gray-900">
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
          <div className="py-2"> 
            <div ref={aboutRef} className="">
              <Home scrollToAbout={() => scrollToSection(aboutRef)} />
            </div>
            <Section  name="About" reference={aboutRef} fillWhite={true}>
              <About />
            </Section>  

            <Section  name="Projects" reference={projectsRef} fillWhite={true}>
              <Projects />
            </Section>  

            <Section  name="Resume" reference={resumeRef} fillWhite={true}>
              <Resume />
            </Section>  

            <Section  name="Music" reference={musicRef} fillWhite={true}>
              <Music />
            </Section>  

            <Section  name="Contact" reference={contactRef} fillWhite={true}>
              <Contact />
            </Section>  
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default App;