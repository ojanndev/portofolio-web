import React, { useState } from "react";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import Switch from "../components/Switch";
import { experiences, educations, menu } from "../data/timeline.js";

export default function Experience() {
  const [experience, setExperience] = useState(true);

  return (
    <div className="py-32 flex flex-col gap-28 px-6 md:px-32">
      <div className="flex flex-col items-center">
        <span className="flex flex-col items-center justify-center gap-1">
          <motion.h1
            className="text-4xl font-medium text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Timeline
          </motion.h1>
          <motion.p
            className="text-[#616161] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            How I got here
          </motion.p>
        </span>

        <div className="mt-6">
          <Switch
            menu={menu}
            active={experience}
            onChange={(val) => setExperience(val)}
          />
        </div>

        {experience ? (
          <Timeline line={experiences} />
        ) : (
          <Timeline line={educations} />
        )}
      </div>
    </div>
  );
}
