import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number; // New prop for delay
  delay2?: number;
}

const RevealEntry = ({
  children,
  width = "fit-content",
  delay = 0,
  delay2 = 0.35,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.75,
          delay, // Apply delay from props
          delay2,
          staggerChildren: 1,
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial='hidden'
        animate={slideControls}
        transition={{
          duration: 0.75,
          delay,
          ease: "easeIn",
        }}
        className='absolute top-4 bottom-4 h-full left-0 bg-base right-0 z-20'
      />
    </div>
  );
};

export default RevealEntry;
