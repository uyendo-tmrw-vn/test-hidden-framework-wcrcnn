import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Project from "./Project";
import { useRouter } from "next/router";

function Card({ id, title, category, theme }) {
  const { asPath } = useRouter();

  return (
    <Link href={`${asPath}?pid=` + id}>
      <li className="card">
        <a>
          <Project
            pid={id}
            isMob={true}
            thumbnail="https://cdn.discordapp.com/attachments/765973145852575746/882623615047172136/project_display-1.png"
          />
        </a>
      </li>
    </Link>
  );
}

export default function List({ isComponent }) {
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
  return (
    <ul className="flex flex-wrap" data-scroll-section>
      <motion.div className="card">
        <span className="grid text-center place-content-center h-full text-2xl font-medium tracking-widest leading-tight text-light uppercase">
          PROMINENT WORKS
        </span>
      </motion.div>
      {isComponent
        ? items.slice(0, 4).map((card) => <Card key={card.id} {...card} />)
        : items.map((card) => <Card key={card.id} {...card} />)}
      {isComponent ? (
        <div className="card">
          <span className="grid text-center place-content-center h-full text-2xl font-medium tracking-widest leading-tight text-light uppercase">
            <Link href="/work">
              <a className="px-8 py-5 bg-gray-100 rounded-full text-xs tracking-widest leading-none text-center text-dark uppercase">
                See more
              </a>
            </Link>
          </span>
        </div>
      ) : null}
    </ul>
  );
}
