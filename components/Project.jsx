import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import Phone from "./Phone";
import Laptop from "./Laptop";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Project = ({
  thumbnail,
  isMob = false,
  topic,
  title,
  description,
  pid,
  some = true
}) => {
  const ProjectRef = useRef(null);
  const refItem = useRef(null);

  return (
    <motion.div
      ref={ProjectRef}
      // layoutId={`container-${pid}`}
      className="Container__ProjectModel_reveal Container__ProjectModel cursor-pointer relative h-full w-full"
    >
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-screen w-screen overflow-hidden"
          layoutId={`image-${pid}`}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <img
            className="object-cover  md:w-7/12 w-full"
            src={thumbnail}
            alt=""
          />
        </motion.div>
      </div>
      {!isMobile && some ? (
        <div
          ref={refItem}
          className="opacity-0 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 ProjectModel"
        >
          {isMob ? (
            <Phone ProjectRef={ProjectRef} />
          ) : (
            <Laptop ProjectRef={ProjectRef} />
          )}
        </div>
      ) : null}
    </motion.div>
  );
};

export default Project;
