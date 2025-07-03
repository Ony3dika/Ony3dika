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


let stack = [
  { icon: <FaHtml5 size={"1.8rem"} />, name: "HTML" },
  { icon: <SiCss3 size={"1.8rem"} />, name: "CSS" },
  { icon: <SiJavascript size={"1.8rem"} />, name: "JavaScript" },
  { icon: <SiBootstrap size={"1.8rem"} />, name: "Bootstrap" },
  { icon: <SiTailwindcss size={"1.8rem"} />, name: "Tailwind" },
  { icon: <SiReact size={"1.8rem"} />, name: "React" },
  { icon: <RiNextjsFill size={"1.8rem"} />, name: "Next" },
  { icon: <SiFramer size={"1.8rem"} />, name: "Framer" },
];

const About = () => {
  return (
    <main id='about' className='lg:mt-20 container mx-auto px-5 xl:px-32 lg:px-20'>
      <Reveal>
        <p className='text-3xl font-semibold'>About</p>
      </Reveal>
      <section className='flex items-center lg:flex-row flex-col mt-5 lg:mt-10 text-alt/80'>
        <div className='basis-1/3'>
          <Reveal>
            <p className='xl:text-3xl lg:text-xl leading-8 lg:leading-relaxed xl:leading-loose'>
              Creative developer with over 3 years of experience in developing
              interactive UI to bring your vision to life
              through code.
            </p>
          </Reveal>
        </div>

        <section className='basis-2/3 mt-20'>
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
