import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Project from "./Project";
import ScrollArrow from "../assets/ScrollArrow.svg";
import { useRouter } from "next/router";

export default function Item({ id }) {
  const { asPath } = useRouter();
  const items = [
    // Photo by ivan Torres on Unsplash
    {
      id: "c",
      category: "Pizza",
      title: "5 Food Apps Delivering the Best of Your City",
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    // Photo by Dennis Brendel on Unsplash
    {
      id: "f",
      category: "How to",
      title: "Arrange Your Apple Devices for the Gram",
      pointOfInterest: 120,
      backgroundColor: "#959684"
    },
    // Photo by Alessandra Caretto on Unsplash
    {
      id: "a",
      category: "Pedal Power",
      title: "Map Apps for the Superior Mode of Transport",
      pointOfInterest: 260,
      backgroundColor: "#5DBCD2"
    },
    // Photo by Taneli Lahtinen on Unsplash
    {
      id: "g",
      category: "Holidays",
      title: "Our Pick of Apps to Help You Escape From Apps",
      pointOfInterest: 200,
      backgroundColor: "#8F986D"
    },
    // Photo by Simone Hutsch on Unsplash
    {
      id: "d",
      category: "Photography",
      title: "The Latest Ultra-Specific Photography Editing Apps",
      pointOfInterest: 150,
      backgroundColor: "#FA6779"
    },
    // Photo by Siora Photography on Unsplash
    {
      id: "h",
      category: "They're all the same",
      title: "100 Cupcake Apps for the Cupcake Connoisseur",
      pointOfInterest: 60,
      backgroundColor: "#282F49"
    },
    // Photo by Yerlin Matu on Unsplash
    {
      id: "e",
      category: "Cats",
      title: "Yes, They Are Sociopaths",
      pointOfInterest: 200,
      backgroundColor: "#AC7441"
    },
    // Photo by Ali Abdul Rahman on Unsplash
    {
      id: "b",
      category: "Holidays",
      title: "Seriously the Only Escape is the Stratosphere",
      pointOfInterest: 260,
      backgroundColor: "#CC555B"
    }
  ];
  const { category, title } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        transition={{ delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="fixed bg-dark flex items-center flex-col  md:flex-row  md:px-4 container w-screen h-full md:h-screen z-50 transform  top-0 left-1/2 -translate-x-1/2"
      >
        <motion.div className="mt-12 mb-6 md:mb-0 md:mt-0 w-full h-full inline-flex flex-col space-y-0 md:space-y-2 items-center justify-center text-center">
          <div className="fixed top-4 left-0 ">
            <Link href={asPath.split("?")[0]}>
              <a className="cursor-pointer flex items-center">
                <div className="transform rotate-90">
                  <ScrollArrow />
                </div>
                <div
                  href="/about"
                  className="text-sm font-medium tracking-widest leading-snug text-gray-100 uppercase"
                >
                  explore other projects
                </div>
              </a>
            </Link>
          </div>
          <p className="text-2xl md:text-4xl font-bold tracking-widest leading-10 uppercase text-stroke">
            UI / ux
          </p>
          <p className="text-4xl md:text-7xl font-bold tracking-widest uppercase">
            Paper stock
          </p>
          <p className="text-base leading-loose text-center p-10">
            Give your team the best chance of success by pairing your innovative
            products with beautiful, engaging design.Give your team the best
            chance of success by pairing your innovative products with
            beautiful,
          </p>
          <a
            href="/"
            className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase"
          >
            See more
          </a>
        </motion.div>
        <motion.div className="w-full h-full">
          <Project
            pid={id}
            isMob={true}
            some={false}
            thumbnail="https://cdn.discordapp.com/attachments/765973145852575746/882623615047172136/project_display-1.png"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
