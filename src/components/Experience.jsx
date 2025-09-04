import React from "react";
import { motion } from "framer-motion"; // ✅ correct import
import { GrideLine } from "../utils/GrideLine";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 relative border border-[#555555]"
    >
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-2 text-neutral-300">
        My <span className="text-outline">Experience</span>
      </h2>
      <p className="text-neutral-400 text-center mx-auto max-w-xl mb-12">
        “From Concepts to Production — My Professional Journey.”.
      </p>

      {/* Background grid */}
      <GrideLine />

      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 md:flex hidden bg-teal-800 transform -translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex items-start w-full ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } justify-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 md:flex hidden -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full shadow-lg flex justify-center items-center bg-neutral-600">
                    <span className="text-2xl text-neutral-100">
                      {exp.logo}
                    </span>
                  </div>
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border border-white/20 bg-black/20 ${
                    isLeft ? "md:text-right md:mr-12" : "md:ml-12"
                  } text-left`}
                >
                  <h3 className="text-xl font-semibold text-neutral-100">
                    {exp.title}
                  </h3>
                  <p className="text-teal-500 font-medium">{exp.company}</p>
                  <p className="text-sm text-neutral-500 mb-3">{exp.period}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {exp.skills.map((skl, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-[#555] text-white/70 rounded-md text-sm font-light"
                      >
                        {skl}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;




