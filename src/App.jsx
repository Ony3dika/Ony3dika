import Navbar from "./components/navbar";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import { useState, useEffect } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    // return () => {
    //   window.removeEventListener("mousemove", mouseMove);
    // };
  }, []);

 

  return (
    <div className='min-h-screen bg-base relative app text-alt urban pb-10 lg:pb-20'>
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
  );
}

export default App;
