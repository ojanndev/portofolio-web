import { GoGitCommit, GoFileDirectory, GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Me from "../assets/img/me.jpg";

const icons = [
  { icon: GoGitCommit, path: "/experience" },
  { icon: GoFileDirectory, path: "/project" },
  { icon: GoPerson, path: "/contact" },
];

export default function BottomBar() {
  return (
    <div className="backdrop-blur-md bg-white/5 text-white rounded-xl flex items-center gap-12 py-3 px-12 text-2xl shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-black transition-colors duration-200"
            : " transition-colors duration-200"
        }
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
        >
          <img src={Me} alt="Home" className="w-full h-full object-cover" />
        </motion.div>
      </NavLink>

      {icons.map((i, idx) => (
        <NavLink
          key={idx}
          to={i.path}
          className={({ isActive }) =>
            isActive
              ? "text-black transition-colors duration-200"
              : " transition-colors duration-200"
          }
        >
          <motion.div
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center"
          >
            <i.icon />
          </motion.div>
        </NavLink>
      ))}
    </div>
  );
}
