import SocialTray from "../../components/SocialTray";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Loader from "../../components/Loader";

const AboutPage = () => {
  const [Loading, setLoading] = useState(true);
  const controls = useAnimation();
  useEffect(() => {
    if (!Loading) {
      setTimeout(() => {
        controls.start("enter");
      }, 2000);
    } else {
      controls.start("hidden");
    }
  }, [Loading, controls]);
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {Loading ? <Loader /> : null}
      </AnimatePresence>

      <section
        initial="hidden"
        exit="exit"
        data-scroll-section
        className="w-full h-screen grid place-content-center"
      >
        <div className="inline-flex flex-col items-center md:items-start space-y-6">
          <div className="inline-flex space-x-2 items-center">
            <div className="w-16 hidden md:flex h-0.5 bg-light"></div>
            <p className="text-sm font-medium tracking-widest leading-snug uppercase">
              Developer
            </p>
          </div>
          <div className="inline-flex items-center md:items-start flex-col text-4xl md:text-7xl font-bold tracking-widest leading-10 uppercase">
            <div>
              <span className="text-stroke">Tech</span>Akhil
            </div>
            <div className="text-2xl md:text-7xl">Padmanabhan</div>
          </div>
          <div className="max-w-3xl text-center md:text-left">
            Give your team the best chance of success by pairing your innovative
            products with beautiful, engaging design.
          </div>
        </div>
      </section>
      <section
        data-scroll-section
        className="pb-12 flex items-center justify-center md:justify-end text-2xl font-medium tracking-widest leading-tight text-light uppercase antialiased"
      >
        what drives me
      </section>
      <section
        data-scroll-section
        className="w-full  text-light flex flex-col space-y-12 lg:flex-row lg:space-x-12 items-center justify-center"
      >
        <div>
          <div className="drive_card relative w-72 h-96 bg-gray-700">
            <div
              data-scroll
              data-scroll-speed="1.6"
              className="absolute -left-8 top-8 flex flex-col uppercase"
            >
              <div className="text-xl font-bold text-stroke-sm tracking-widest">
                Eye of
              </div>
              <div className="text-4xl font-bold tracking-wider">discovery</div>
            </div>
            <img
              onLoad={() => setLoading(false)}
              className="object-cover w-full h-full object-center"
              src="https://i2.wp.com/trippy.me/wp-content/uploads/let-go.gif"
              alt=""
            />
          </div>
          <div className="w-64 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis vel porro commodi dolor eius necessitatibus cupiditate
            excepturi? Quaerat maxime magnam necessitatibus veritatis sint
            repellat recusandae nam. Fugiat, nulla tempore? Corporis!
          </div>
        </div>
        <div className="drive_card w-72 h-96 bg-gray-50 lg:self-end"></div>
        <div className="drive_card w-72 h-96 bg-gray-50 lg:self-start"></div>
      </section>
      <section
        data-scroll-section
        className="flex flex-col  items-center justify-evenly h-screen"
      >
        <div className="p-12 w-1/2  transform scale-150">
          <SocialTray />
        </div>
        <div className="uppercase text-9xl font-bold">
          Lets{" "}
          <Link href="/contact">
            <a className="fx-underline text-stroke">Talk</a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
