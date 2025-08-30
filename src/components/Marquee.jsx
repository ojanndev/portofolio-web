import React from "react";
import { motion } from "framer-motion";
import { images } from "../data/tools.js";

export default function Marquee() {
  return (
    <div className="flex flex-col ">
      <span className="flex flex-col items-center justify-center gap-1">
        <motion.h1
          className="text-4xl font-medium text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Tools
        </motion.h1>
        <motion.p
          className="text-[#616161] font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Tech I work with
        </motion.p>
      </span>
      <div className="flex flex-wrap space-x-3 md:space-x-8 justify-center mt-10 md:mt-20 space-y-3  md:space-y-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center w-8 h-8 md:w-12 md:h-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={image}
              alt={image}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
