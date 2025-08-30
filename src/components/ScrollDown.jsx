import React from "react";
import { motion } from "framer-motion";

export default function ScrollDown() {
  return (
    <motion.div
      className="flex flex-col items-center  cursor-pointer "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
        <motion.div
          className="w-1 h-1.5 rounded-full bg-gray-300 mt-0.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>
      <p className="text-sm text-gray-300 mt-3">Scroll Down</p>
    </motion.div>
  );
}
