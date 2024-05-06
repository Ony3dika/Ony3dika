import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";
import pro6 from "../assets/pro6.png";
import { ImSpinner9 } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { RxExternalLink } from "react-icons/rx";
import { useState } from "react";

let projects = [
  {
    num: "01",
    title: "ArtScape",
    body: " ArtScape is an art gallery which displays popular artworks from famous artists. The gallery composes of the details of the artwork together with its author and other relevant details.",
    repo: "https://github.com/Ony3dika/artScape",
    link: "https://art-scape.vercel.app/",
    img: pro1,
  },

  {
    num: "02",
    title: "Cinematrix",
    body: " Cinematrix is a movie recommendation and search website built using Tailwind CSS, Jotai and ReactJS. It provider users a source to discover and search for movies and TV series depending on their desires TheMovieDB was used to efficiently gather the vast amount of data associated with the movies and TV series.",
    repo: "https://github.com/Ony3dika/Cinematrix",
    link: "https://cinematrix.ony3dika.vercel.app/",
    img: pro2,
  },

  {
    num: "03",
    title: "Quanta",
    body: "Landing page of Quanta, the fusion of AI and data analytics.",
    repo: "https://github.com/Ony3dika/Quanta",
    link: "https://quanta-ony3dikas-projects.vercel.app/",
    img: pro3,
  },

  {
    num: "04",
    title: "ClearLink",
    body: "A front-end challenge to develop a webpage for a concept platform which aims to solve communication breaches.",
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
    num: "06",
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
    <main id="projects" className='mt-20 container mx-auto px-5 lg:px-32'>
      <p className='text-3xl font-semibold'>Projects</p>

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
                index == hoveredIndex
                  ? "lg:group-hover:translate-x-8"
                  : "s]"
              }`}
            >
              <p className='text-xl lg:text-5xl marcel'>{project.title}</p>

              <img
                src={project.img}
                className={`transition-all ease-in-out duration-700 rounded-xl block lg:hidden ${
                  index == hoveredIndex
                    ? "group-hover:scale-100 group-hover:contrast-100"
                    : "scale-[0.9] contrast-50"
                }`}
                alt='image-of-project'
              />
              <p className='mt-3 lg:text-lg text-xs text-alt/70'>
                {project.body}
              </p>

              <div className='flex justify-around text-alt/80 mt-5 lg:mt-10 w-1/3 lg:w-1/5'>
                <a
                  href={project.repo}
                  className='hover:text-call/70 transition-all duration-200 ease-in-out'
                  target='_blank'
                >
                  <SiGithub size={"1.5rem"} />
                </a>
                <a
                  href={project.link}
                  className='hover:text-call/70 transition-all duration-200 ease-in-out'
                  target='_blank'
                >
                  <RxExternalLink size={"1.5rem"} />
                </a>
              </div>
            </section>

            <p className='absolute right-5 lg:bottom-10 bottom-2 font-semibold'>
              {project.num}
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
