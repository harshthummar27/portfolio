import React from "react";
import { skillsData } from "../data/data";
import { motion } from "framer-motion";
import { GrideLine } from "../utils/GrideLine";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 page-wrapper relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3 text-neutral-300">
          My <span className="text-outline">Skills</span>
        </h2>
        <p className="text-neutral-400 text-center amx-w-xl mx-auto mb-12">
          💡 “Turning Ideas into Code, and Code into Impact.”
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
                backgroundColor: "transparent",
                borderColor: "oklch(77.7% 0.152 181.912)",
              }}
              transition={{ type: "spring", startOffset: 200, damping: 15 }}
              className="backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/20"
            >
              <GrideLine />
              <h3 className="text-3xl font-semibold mb-4 text-teal-400">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skill.skills.map((item, index) => (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                      backgroundColor: "transparent",
                      boxShadow: "0px 10px 20px rgba(0, 255, 200. 0.4)",
                    }}
                    transition={{
                      type: "spring",
                      startOffset: 200,
                      damping: 15,
                    }}
                  >
                    <div className="flex items-center z-50 relative gap-2 py-2 px-4 text-white/70 bg-black/50 backdrop-blur-md text-sm rounded-lg cursor-pointer">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
