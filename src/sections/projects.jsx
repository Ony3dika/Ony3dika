import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.jpg";
import pro6 from "../assets/pro6.jpg";
import pro7 from "../assets/pro7.jpg";
import pro8 from "../assets/pro8.jpg";
import pro9 from "../assets/pro9.png";

import { ImSpinner9 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { RxExternalLink } from "react-icons/rx";
import { useState } from "react";
import Reveal from "../components/reveal";
let projects = [
  {
    title: "Koda",
    body: "A collaborative web-based text editor",
    repo: "https://github.com/Ony3dika/koda",
    link: "https://koda-kody.vercel.app/",
    img: pro8,
  },
  {
    title: "Ordo",
    body: "Introducing gryd -  a next-gen cloud service provider with a focus on security and reliability",
    repo: "https://github.com/Ony3dika/Ordo",
    link: "https://ordo-six.vercel.app/",
    img: pro9,
  },
  {
    title: "Clyp",
    body: "Screen record videos on your device and store locally in high resolution",
    repo: "https://github.com/Ony3dika/Clyp",
    link: "https://clyp-x.vercel.app/",
    img: pro3,
  },
  {
    title: "gryd",
    body: "A landing page for an AI powered workflow system",
    repo: "https://github.com/Ony3dika/gryd",
    link: "https://grryd.vercel.app/",
    img: pro7,
  },
  {
    title: "ArtScape",
    body: "ArtScape is an art gallery which displays popular artworks from famous artists. The gallery composes of the details of the artwork together with its author and other relevant details",
    repo: "https://github.com/Ony3dika/artScape",
    link: "https://art-scape.vercel.app/",
    img: pro1,
  },

  {
    title: "Cinematrix",
    body: "Cinematrix is a movie recommendation and search website built using Tailwind CSS, Jotai and ReactJS. It provider users a source to discover and search for movies and TV series depending on their desires TheMovieDB was used to efficiently gather the vast amount of data associated with the movies and TV series",
    repo: "https://github.com/Ony3dika/Cinematrix",
    link: "https://cinematrix.ony3dika.vercel.app/",
    img: pro2,
  },

  {
    title: "ClearLink",
    body: "A front-end challenge to develop a webpage for a concept platform which aims to solve communication breaches",
    repo: "https://github.com/Ony3dika/Clear-Link",
    link: "https://clear-link-tan.vercel.app//",
    img: pro4,
  },

  {
    num: "05",
    title: "getLinked",
    body: "Participated in a hackathon organized by getLinked.ai.  The challenge involves creating a landing page, a contact page and register page which has API endpoints for communication with the backend.",
    repo: "https://github.com/Ony3dika/getLinked",
    link: "https://get-linked-ruddy.vercel.app/",
    img: pro5,
  },

  {
    title: "NXTGaming",
    body: "NXTGaming is a gaming collection web app built using Tailwind CSS and ReactJS. The project aimed to provide gamers with a platform to explore and discover games. RAWG API was used to efficiently manage the vast amount of data associated with gaming collections.",
    repo: "https://github.com/Ony3dika/NXTGmn",
    link: "https://nxt-gmn.vercel.app/",
    img: pro6,
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main
      id='projects'
      className='mt-20 container mx-auto px-5 xl:px-32 lg:px-20'
    >
      <Reveal>
        <p className='text-3xl font-semibold'>Projects</p>
      </Reveal>
      {/* Project Section */}
      <section className='lg:mt-10 mt-5 flex group flex-col divide-y-[1px] divide-alt'>
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className='lg:min-h-72 min-h-48 lg:py-10 flex lg:flex-row relative flex-col items-center group'
            key={index}
          >
            <ImSpinner9
              className={`animate-spin-slow hidden transition-all duration-1000 text-call ${
                index == hoveredIndex ? "lg:group-hover:inline" : ""
              }`}
              size={"1.4rem"}
            />

            {/* Text Desc of Project */}
            <section
              className={`basis-full lg:basis-2/3 lg:ml-5 py-5 lg:py-0 duration-500 ease-in-out transition-all ${
                index == hoveredIndex ? "lg:group-hover:translate-x-8" : "s]"
              }`}
            >
              <Reveal>
                <p className='text-xl lg:text-5xl py-2 marcel'>{project.title}</p>
              </Reveal>

              <img
                src={project.img}
                className={`transition-all ease-in-out duration-700 rounded-xl block lg:hidden ${
                  index == hoveredIndex
                    ? "group-hover:scale-100 scale-90 group-hover:contrast-100"
                    : "scale-[0.85] contrast-50"
                }`}
                alt='image-of-project'
              />

              <Reveal>
                <p className='mt-3 lg:text-lg text-xs text-alt/70'>
                  {project.body}
                </p>
              </Reveal>

              <div className='flex justify-around text-alt/80 mt-5 lg:mt-10 w-1/3 lg:w-1/5'>
                <Reveal>
                  <a
                    href={project.repo}
                    className='hover:text-call/70 transition-all duration-200 ease-in-out'
                    target='_blank'
                  >
                    <SiGithub size={"1.5rem"} />
                  </a>
                </Reveal>

                <Reveal>
                  <a
                    href={project.link}
                    className='hover:text-call/70 transition-all duration-200 ease-in-out'
                    target='_blank'
                  >
                    <RxExternalLink size={"1.5rem"} />
                  </a>
                </Reveal>
              </div>
            </section>

            <p className='absolute right-5 lg:bottom-10 bottom-2 font-bold'>
              {index + 1}
            </p>

            {/* Image */}

            <img
              src={project.img}
              className={`lg:h-36 h-20 lg:block absolute hidden rounded-xl top-0 lg:top-auto right-0 lg:right-20 z-10 transition-all duration-500 ease-in-out ${
                index === hoveredIndex
                  ? "opacity-100 scale-125 -translate-y-10 translate-x-10"
                  : "opacity-0 scale-[0.9]"
              }`}
              alt='image-of-project'
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projects;
