import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiFramer,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import Reveal from "../components/reveal";
import gsap from "../assets/gsap.png";

let stack = [
  { icon: <SiReact size={"1.8rem"} />, name: "React" },
  { icon: <RiNextjsFill size={"1.8rem"} />, name: "Next" },
  { icon: <SiJavascript size={"1.8rem"} />, name: "JavaScript" },
  { icon: <SiTailwindcss size={"1.8rem"} />, name: "Tailwind" },
  {
    icon: <img src={gsap} className='h-4 w-10' alt='gsap' />,
    name: "GSAP",
  },
  { icon: <SiFramer size={"1.8rem"} />, name: "Framer" },
  { icon: <FaHtml5 size={"1.8rem"} />, name: "HTML" },
  { icon: <SiCss3 size={"1.8rem"} />, name: "CSS" },
  { icon: <SiBootstrap size={"1.8rem"} />, name: "Bootstrap" },
];

const About = () => {
  return (
    <main
      id='about'
      className='lg:mt-20 container mx-auto px-5 xl:px-32 lg:px-20'
    >
      <Reveal>
        <p className='text-3xl font-semibold'>About</p>
      </Reveal>
      <section className='flex items-center lg:flex-row flex-col mt-5 text-alt/80'>
        <div className='basis-2/5'>
          <Reveal>
            <p className='xl:text-xl lg:text-xl leading-8 lg:leading-relaxed xl:leading-loose'>
              Creative & product-focused frontend developer with experience
              building and shipping web applications and AI powered platforms.
              Strong in translating complex ideas into clean, scalable user
              interfaces, with a sharp eye for UX, performance, and system
              design. Experienced in building AI-driven customer support tools,
              dashboards, and real-time applications using modern JavaScript
              frameworks
            </p>
          </Reveal>
        </div>

        <section className='basis-3/5 mt-20'>
          <Reveal>
            <p className='text-center text-xl lg:text-4xl font-medium border-alt/30 border-b-4 border-double lg:pb-4 mx-20 lg:mx-32'>
              Stack
            </p>
          </Reveal>
          <div className='h-fit lg:h-72 lg:gap-0 gap-5 grid lg:mt-0 mt-5 grid-cols-5'>
            {stack.map((tekk, index) => (
              <div
                className={`text-alt rounded-2xl flex justify-center items-center flex-col ${
                  index == 5 ? "col-start-2 col-end-3" : ""
                }`}
                key={index}
              >
                <Reveal>
                  <i className={`${index == 5 ? "animate-spin-slow" : ""}`}>
                    {tekk.icon}
                  </i>
                </Reveal>
                <Reveal>
                  <p className='mt-2 text-xs lg:text-sm'>{tekk.name}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
