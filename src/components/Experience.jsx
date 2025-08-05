import { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "vynixLabs",
      role: "Frontend Developer",
      period: "2025 - Present",
      description: [
        "Developed blockchain and Web3 applications using modern frameworks",
        "Implemented monorepo architecture for scalable project structures",
        "Contributed to open-source projects including onlyDust (last wave participant)",
        "Collaborated in a fellowship program to enhance technical leadership",
      ],
    },
    {
      company: "GoMyCode",
      role: "Full Stack Instructor",
      period: "2024 - 2025",
      description: [
        "Designed curriculum for JavaScript, React, and Node.js programs",
        "Mentored 50+ students in full-stack development best practices",
        "Created real-world project scenarios for hands-on learning",
      ],
    },
    {
      company: "TEA Nigeria",
      role: "Frontend Developer & Evaluation Officer",
      period: "2022 - 2023",
      description: [
        "Built responsive web applications for NGO operations and outreach",
        "Evaluated and recommended tech solutions for social impact",
        "Led tech mentorship programs for underserved communities",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Header with animated underline - Matching About section style */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
          02. Where I&apos;ve Worked
        </span>
        <motion.div
          className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent w-1/2 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Company tabs */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-left border-b-2 lg:border-l-2 lg:border-b-0 border-gray-700 whitespace-nowrap transition-colors ${
                activeTab === index
                  ? "border-purple-400 text-purple-400"
                  : "text-gray-400 hover:text-gray-300 hover:border-gray-600"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience details */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5,
          }}
          className="flex-1"
        >
          <div className="text-gray-300">
            <h3 className="text-xl font-semibold text-white">
              {experiences[activeTab].role}{" "}
              <span className="text-purple-400">
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              {experiences[activeTab].period}
            </p>

            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex items-start"
                >
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
