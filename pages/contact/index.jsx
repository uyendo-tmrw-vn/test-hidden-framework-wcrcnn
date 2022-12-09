import SocialTray from "../../components/SocialTray";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Loader from "../../components/Loader";

const ContactPage = () => {
  const [Loading, setLoading] = useState(true);
  const controls = useAnimation();
  const [GlitchCount, setCount] = useState(0);
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2
      }
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  useEffect(() => {
    if (GlitchCount < 7) {
      setTimeout(() => setLoading(!Loading), 500);
      setCount(GlitchCount + 1);
    } else setLoading(false);
  }, [Loading]);
  useEffect(() => {
    if (!Loading) {
      setTimeout(() => {
        controls.start("enter");
      }, 1000);
    } else {
      controls.start("hidden");
    }
  }, [Loading, controls]);
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {Loading ? <Loader /> : null}
      </AnimatePresence>
      <motion.section
        variants={variants}
        animate={controls}
        data-scroll-section
        className="h-full w-full text-light flex flex-col items-center justify-center uppercase"
      >
        <div className="py-12 pt-36 text-4xl tracking-widest text-center flicker text-gray-400">
          something's <span className="text-light glow">wrong</span> here
        </div>
        <div className="w-full flex md:space-x-6 md:flex-row flex-col items-center justify-center">
          <div className="md:text-6xl text-5xl max-w-lg font-bold md:text-left text-center">
            please contact the <span className="text-stroke-sm">admin</span> of
            this page
          </div>
          <form className="flex flex-col w-full space-y-4">
            <input
              type="text"
              className="bg-transparent border-b-2 p-1 w-full"
              placeholder="Name"
            />
            <input
              type="text"
              className="bg-transparent border-b-2 p-1 w-full"
              placeholder="Emai Address"
            />
            <textarea
              className="bg-transparent border-2 p-1"
              rows="5"
              placeholder="Hi,
  I Just came across your website and I...."
            ></textarea>
            <div className="py-6 flex space-x-12">
              <a
                href="/"
                className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase"
              >
                Send
              </a>
              <SocialTray />
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;
