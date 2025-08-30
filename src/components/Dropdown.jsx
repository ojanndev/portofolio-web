import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoChevronDown } from "react-icons/go";

export default function Dropdown({
  label,
  options = [],
  setType,
  selectedType,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectedLabel =
    options.find((option) => option.value === selectedType)?.label ||
    "Select Option";

  return (
    <div className="relative inline-block text-left text-sm">
      <motion.button
        whileTap={{ scale: 0.95, transition: { duration: 0 } }}
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full px-4 py-2 bg-[#282828] text-white rounded-xl transition-all cursor-pointer"
      >
        {label}: {selectedLabel}
        <GoChevronDown
          className={`ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={20}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-full bg-[#282828] text-white rounded-xl shadow-lg z-10 p-2"
          >
            {options.map((option) => (
              <button
                key={option.value}
                className="w-full text-left px-4 py-2 rounded-xl hover:bg-[#616161] transition-all"
                onClick={() => {
                  setType(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
