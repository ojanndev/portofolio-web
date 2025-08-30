import React from "react";
import { GoBriefcase, GoFlame, GoThumbsup } from "react-icons/go";
import { motion } from "framer-motion";
import Me2 from "../assets/img/me2.jpg";

const cards = [
  { icon: GoBriefcase, title: "Experience", subtitle: "1+ Years" },
  {
    icon: GoFlame,
    title: "Completed",
    subtitle: "7 Projects",
  },
  { icon: GoThumbsup, title: "Support", subtitle: "Online 24/7" },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <span className="flex flex-col items-center justify-center gap-1">
        <motion.h1
          className="text-4xl font-medium text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-[#616161] font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          My introduction
        </motion.p>
      </span>
      <div className="flex flex-col md:flex-row justify-center mt-10 md:mt-20 gap-6 md:gap-12">
        <div className="w-full md:w-1/2">
          <motion.img
            src={Me2}
            className="rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex justify-between md:justify-center md:gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  className="text-white p-3 md:px-6 md:py-4 flex flex-col items-center bg-[#282828] rounded-xl cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Icon className="text-lg md:text-2xl" />
                  <p className="text-sm md:text-base font-medium mt-1.5">
                    {card.title}
                  </p>
                  <p className="font-light text-gray-500 text-xs md:text-sm">
                    {card.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <motion.p
            className="text-[#616161] font-light text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Fullstack Developer with 1+ years of internship and freelance experience, skilled in building web applications using Laravel, Node.js, React, and SQL/NoSQL databases, with hands-on expertise in both frontend and backend development.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
