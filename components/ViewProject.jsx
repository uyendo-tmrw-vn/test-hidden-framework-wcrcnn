import React from "react";
import Project from "./Project";
import { motion, AnimatePresence } from "framer-motion";
const ViewProject = ({ pid, reverse }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      className="fixed md:px-4 container mx-auto transform -translate-x-1/2 top-0 left-1/2 z-50 w-screen bg-dark h-full screen"
    >
      <div className="flex h-full justify-center items-center antialiased">
        <div
          style={{ direction: reverse ? "rtl" : "ltr" }}
          className="justify-center w-full grid  grid-col-1 gap-4 md:grid-cols-2"
        >
          <motion.div className="space-y-4">
            <div className="w-full h-full inline-flex flex-col space-y-2 items-center justify-center text-center">
              <p className="text-4xl font-bold tracking-widest leading-10 uppercase text-stroke">
                UI / ux
              </p>
              <p className="text-7xl font-bold tracking-widest uppercase">
                Paper stock
              </p>
              <p className="text-base leading-loose text-center p-10">
                Give your team the best chance of success by pairing your
                innovative products with beautiful, engaging design.Give your
                team the best chance of success by pairing your innovative
                products with beautiful,
              </p>
              <a
                href="/"
                className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase"
              >
                See more
              </a>
            </div>
          </motion.div>
          <motion.div className="space-y-4 h-full">
            <motion.div>
              <Project
                pid={pid}
                some={false}
                isMob={true}
                thumbnail="https://cdn.discordapp.com/attachments/765973145852575746/882623615047172136/project_display-1.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ViewProject;
