import { IoCodeSlashOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import Reveal from "./reveal";
let menu = [
  { title: "Home", to: "hero" },
  { title: "About", to: "about" },
  { title: "Projects", to: "projects" },
  { title: "Contact", to: "contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".navbr").offsetHeight;
    const offset = section.offsetTop - navbarHeight * 1.5;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <main className='lg:fixed z-40 top-0 flex items-center lg:h-24 h-16 lg:border-b-[1px] navbr border-alt/20 lg:bg-base justify-between container mx-auto px-5 xl:px-32 lg:px-20'>
      <div className='basis-1/5 flex items-center lg:hidden'>
        <Reveal>
          <p className='mt-8 text-xl flex items-center text-alt'>
            Ony3dika
            <Reveal>
              <IoCodeSlashOutline className='ml-2 text-call' size={"1rem"} />
            </Reveal>
          </p>
        </Reveal>
      </div>
      <div className='basis-1/5 lg:flex items-center hidden'>
        <Reveal>
          <p className='lg:text-xl text-lg font-medium'>Ony3dika</p>
        </Reveal>
        <Reveal>
          <IoCodeSlashOutline className='ml-2 text-call' size={"1.5rem"} />
        </Reveal>
      </div>

      <section className='basis-3/5 lg:flex items-center hidden justify-center'>
        {menu.map((item, index) => (
          <Reveal key={index}>
            <a
              className='mx-8 hover:text-call transition-all duration-200 hover:scale-110 ease-linear'
              onClick={() => handleScrollToSection(item.to)}
            >
              {item.title}
            </a>
          </Reveal>
        ))}
      </section>

      {/* Mobile */}

      <section className='basis-1/5 lg:hidden flex relative justify-end'>
        <div className='flex p-2 rounded-full top-8 fixed z-30 bg-alt float'>
          <CiMenuFries
            size={"1.5rem"}
            className='text-white'
            onClick={() => setMobileMenu(true)}
          />
        </div>

        {mobileMenu && (
          <nav
            className={`w-full h-screen backdrop-blur-lg z-50 transition-all duration-300 ease-in-out text-base left-0 px-5 fixed bottom-0`}
          >
            <main className='bg-alt menuBg px-5 bottom-0 left-0 h-[90vh] rounded-t-2xl fixed w-full'>
              <section className='flex justify-between items-center mt-10'>
                <div className='flex items-center'>
                  <Reveal>
                    <p className='lg:text-xl text-lg font-medium'>Ony3dika</p>
                  </Reveal>
                  <Reveal>
                    <IoCodeSlashOutline
                      className='ml-2 text-call'
                      size={"1.5rem"}
                    />
                  </Reveal>
                </div>
                <TfiClose onClick={() => setMobileMenu(false)} />
              </section>

              <section className='mt-20 divide-y-[1px] divide-base/20'>
                {menu.map((item, index) => (
                  <div key={index} className='py-8'>
                    <Reveal>
                      <a
                        onClick={() => {
                          setMobileMenu(false);
                          handleScrollToSection(item.to);
                        }}
                      >
                        {item.title}
                      </a>
                    </Reveal>
                  </div>
                ))}
              </section>
            </main>
          </nav>
        )}
      </section>
    </main>
  );
};

export default Navbar;
