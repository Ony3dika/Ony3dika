import hex from "../assets/dot.svg";
import me from "../assets/me.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildern: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 400, x: 400, opacity: 0 },
  animate: { y: 0, x: 0, opacity: 1 },
  transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 40,
  },
};

const Hero = () => {
  return (
    <main id='hero' className='mt-20 lg:mt-32 min-h-[50vh]'>
      {/* Intro */}
      <div className='flex lg:flex-row flex-col container mx-auto px-5 lg:px-32'>
        <motion.section
          variants={banner}
          className='basis-1/2 relative flex flex-col isolate justify-center'
        >
          <img
            src={hex}
            className='lg:h-52 h-24 absolute left-0 -z-10 top-0 brightness-75'
            alt='dot-pattern'
          />
          <motion.p
            variants={letterAnimation}
            initial='initial'
            animate='animate'
            className='lg:text-7xl text-4xl font-bold'
          >
            Hi, I&apos;m{" "}
            <span className='text-[#dad4d1] textOutline'>Onyedika</span>{" "}
          </motion.p>

          <p className='mt-8 lg:text-xl ml-8 lg:ml-10 font-medium'>
            A Nigerian <span className='text-call'>Web Developer</span> who
            likes to be creative with websites.
          </p>

          <a href='#contact'>
            <button className='mt-8 duration-300 lg:w-1/3 w-2/3 lg:ml-0 ml-16 group rounded-full flex items-center justify-center text-text hover:text-call hover:border-call hover:translate-y-5 hover:translate-x-5 font-medium border-[1px] border-alt lg:px-4 py-1.5 lg:py-3'>
              Let&apos;s discuss{" "}
              <HiOutlineArrowLongRight
                className='lg:ml-3 ml-1 transition-all duration-100 ease-in-out group-hover:translate-x-5'
                size={"1.8rem"}
              />
            </button>
          </a>
        </motion.section>

        {/* Image */}
        <section className='basis-1/2 lg:mt-0 mt-10 flex relative isolate justify-center overflow-hidden items-center'>
          <img
            src={hex}
            className='absolute lg:h-44 h-24 lg:-left-20 -right-20 top-0 rotate-90 -z-10 brightness-75'
            alt='dot-pattern'
          />
          <img src={me} className='lg:h-96 h-44' alt='dot-pattern' />
        </section>
      </div>

      <marquee className='my-5 font-bold text-3xl lg:text-9xl text-[#dad4d1] textOutline2'>
        Developing Interactive Websites -{" "}
        <span className='textOutline'>Ony3dika</span>
      </marquee>
    </main>
  );
};

export default Hero;
