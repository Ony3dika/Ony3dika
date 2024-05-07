import Navbar from "./components/navbar";
import RevealEntry from "./components/revealEntry";
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
      setLoading(false)
    }, 7350);

    window.addEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      {loading ? (
        <div className='h-screen w-full flex urban entry flex-col items-start px-5 lg:px-20 justify-center bg-base text-4xl lg:text-8xl'>
          <RevealEntry>
            <p className='font-black text-alt'>Hello !!!</p>
          </RevealEntry>

          <RevealEntry delay={2.5} delay2={2.15}>
            <p className='font-black my-10 text-alt'>
              Please <span className='text-call'>wait</span> while the content
              loads....
            </p>
          </RevealEntry>

          <RevealEntry delay={4.5} delay2={4.15} >
            <p className='font-black text-alt'>
              Oh wait! It&apos;s already <span className='text-call'>done</span>
            </p>
          </RevealEntry>
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
