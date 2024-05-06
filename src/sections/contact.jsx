import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ImSpinner9 } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { SiGithub, SiLinkedin } from "react-icons/si";


let socials = [
  {
    icon: <RiTwitterXLine size={"1.5rem"} />,
    to: "https://twitter.com/Ony3dikaa",
  },
  { icon: <SiGithub size={"1.5rem"} />, to: "https://github.com/Ony3dika" },
  {
    icon: <SiLinkedin size={"1.5rem"} />,
    to: "https://www.linkedin.com/in/onyedikachukwu-akpa-127360248",
  },
];

const Contact = () => {
  const form = useRef();
  const [message, SetMessage] = useState(false);
  const [loading, setLoading] = useState(false);  

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        // Service Key
        "service_ffy9f7k",

        // Template Key
        "template_uk9hfk9",
        form.current,

        // Public Key
        "wRPiALQMMtIGQDjVC"
      )

      .then(
        (result) => {
          console.log(result.text);

          SetMessage(true);

          setTimeout(() => {
            setLoading(false);
          }, 3000);

          setTimeout(() => {
            SetMessage(false);
          }, 5000);
        },

        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
 
  };

  return (
    <main
      id='contact'
      className='lg:mt-32 mt-20 container mx-auto px-5 lg:px-32'
    >
      <p className='text-3xl font-semibold'>Contact</p>

      <p className='text-4xl lg:text-9xl font-black mt-10'>
        Let&apos;s{" "}
        <span className='text-transparent textOutline'>Abeg nah!!</span> work{" "}
        <br className='lg:block hidden' /> together
      </p>

      <section className='mt-10 lg:mt-20 flex lg:flex-row flex-col lg:border-[1px] border-alt/20 rounded-lg overflow-hidden lg:min-h-[80vh]'>
        <div className='lg:basis-[30%] lg:h-auto h-56 pat' />

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className='lg:basis-[70%] lg:border-l-[1px] border-alt/20 flex flex-col justify-center lg:px-10 lg:bg-[#ddcfc8]'
        >
          <section className='flex items-center justify-between lg:mt-0 mt-10'>
            <p className='font-bold lg:basis-[30%] text-xl lg:text-3xl'>
              Get In Touch
            </p>

            <div className='flex'>
              {socials.map((social, index) => (
                <a
                  href={social.to}
                  className='mx-3'
                  key={index}
                  target='_blank'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </section>
          <input
            type='text'
            name='from_name'
            required
            className='px-5 py-2 mt-5 outline-none rounded-md w-full bg-transparent border-alt/40 border-[1px] placeholder:text-alt/80 font-medium '
            placeholder='Name'
          />

          <input
            type='email'
            name='from_email'
            required
            className='px-5 py-2 mt-5 outline-none rounded-md w-full bg-transparent border-alt/40 border-[1px] placeholder:text-alt/80 font-medium '
            placeholder='Email'
          />

          <textarea
            name='message'
            required
            rows='8'
            className='mt-5 px-5 py-2 border-alt/40 border-[1px] bg-transparent outline-none rounded-md w-full placeholder:text-alt/80 font-medium resize-none'
            placeholder='Leave your message here...'
          ></textarea>
          {message && (
            <p className='mt-2 bg-green-400 rounded-md py-2 px-5 text-white'>
              Message sent successfully!
            </p>
          )}
          <button
            type='sumbit'
            disabled={loading}
            className={`bg-alt/90 text-base font-medium text-lg flex justify-center w-full mb-3 py-4 lg:py-4 mt-4 rounded-md hover:bg-alt transition-all ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#e23c20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${
              loading ? "animate-pulse" : " "
            }`}
          >
            {loading ? <ImSpinner9 className='animate-spin' /> : "Send"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
