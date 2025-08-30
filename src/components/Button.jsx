import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const sizeClasses = {
  xs: "px-2 py-1.5 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-5 py-3 text-lg",
  xl: "px-6 py-3.5 text-xl",
};

export default function Button({
  label,
  size = "md",
  actions = "link",
  url = "#",
  type = "button",
}) {
  const classes = `${
    sizeClasses[size] || sizeClasses["md"]
  } rounded-xl bg-[#282828] text-white flex items-center justify-center cursor-pointer`;

  const MotionButton = ({ children, onClick, type }) => (
    <motion.button
      type={type}
      whileTap={{ scale: 0.95, transition: { duration: 0 } }}
      className={`${classes} font-medium`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  // Helper buat deteksi external/public link
  const isExternal = (link) => {
    return (
      link.startsWith("http") ||
      link.startsWith("www") ||
      link.startsWith("/public") ||
      link.endsWith(".pdf")
    );
  };

  if (actions === "download") {
    return (
      <a href={url} download target="_blank" rel="noopener noreferrer">
        <MotionButton type="button">{label}</MotionButton>
      </a>
    );
  }

  if (actions === "link") {
    if (isExternal(url)) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <MotionButton type="button">{label}</MotionButton>
        </a>
      );
    } else {
      return (
        <NavLink to={url}>
          <MotionButton type="button">{label}</MotionButton>
        </NavLink>
      );
    }
  }

  return <MotionButton type={type}>{label}</MotionButton>;
}
