import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import { useState, useEffect } from "react";
import logo from "./assets/logo.png"

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    setTimeout(() => {
      setLoading(false);
    }, 3500);

    window.addEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      {loading ? (
        <div className='h-screen w-full flex urban entry flex-col items-center px-5 xl:px-20 lg:px-10 justify-center bg-base text-4xl lg:text-8xl'>
          <img src={logo} className='lg:h-20 h-12 lg:w-20 w-12 animate-pulse' alt='logo' />

          <p className='text-xl lg:text-5xl animate-pulse py-2'>Ony3dika</p>
        </div>
      ) : (
        <div className='min-h-screen overflow-hidden bg-base relative app text-alt urban pb-10 lg:pb-20'>
          <div
            style={{
              left: mousePosition.x - 16,
              top: mousePosition.y - 16,
            }}
            className='bg-call z-50 h-8 w-8 hidden lg:block pointer-events-none transition-all duration-0 ease-linear rounded-full top-0 left-0 fixed'
          />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
