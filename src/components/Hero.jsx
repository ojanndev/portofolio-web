import React, { useState, useEffect } from "react";
import Button from "./Button";
import { PiReadCvLogo } from "react-icons/pi";
import { motion } from "framer-motion";
import MyResume from "../assets/pdf/Resume_FN.pdf";

export default function Hero() {
  const text = "I'm Fauzan";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full text-white "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20">
        <motion.div
          className="home__img w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-cover bg-center rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl font-semibold text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
          </motion.h1>
          <div className="mt-3 text-center md:text-left">
            <p className="text-gray-300 font-light italic">Fullstack Dev</p>
            <p className="text-base font-light leading-relaxed text-gray-200">
              I am a full-stack developer proficient in <b>Laravel & JavaScript.</b>
            </p>
          </div>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <Button
              actions="download"
              size="md"
              url={MyResume}
              label={
                <span className="flex items-center gap-3">
                  Resume <PiReadCvLogo />
                </span>
              }
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
