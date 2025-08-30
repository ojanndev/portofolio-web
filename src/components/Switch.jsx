import React from "react";
import { motion } from "framer-motion";

export default function Switch({ menu = [], active, onChange }) {
  return (
    <motion.div
      className="h-10 flex items-center justify-between p-1 rounded-xl cursor-pointer bg-[#282828] text-white select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {menu.map((item) => {
        const isActive = active === item.value;
        return (
          <div
            key={item.label}
            onClick={() => onChange(item.value)}
            className="w-1/2 py-2 px-4 h-full relative flex items-center justify-center"
          >
            {isActive && (
              <motion.div
                layoutId="switch"
                className="absolute inset-0 bg-white rounded-xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span
              className={`z-10 font-medium ${
                isActive ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}
