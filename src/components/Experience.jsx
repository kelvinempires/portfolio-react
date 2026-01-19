import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./reusableCom/SectionHeader";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "vynixLabs",
      role: "Frontend Developer",
      period: "2025 - nov 2025",
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

  // Bubble data for the background animation
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    opacity: Math.random() * 0.2 + 0.1,
  }));

  return (
    <section
      id="experience"
      className="relative py-16 px-6 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ bottom: -100, opacity: 0 }}
            animate={{
              bottom: "110%",
              opacity: [0, bubble.opacity, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              borderRadius: "50%",
              background: "rgba(139, 92, 246, 0.2)",
              position: "absolute",
            }}
          />
        ))}
      </div>

      {/* Header with animated underline */}
      <SectionHeader number="03" title="Where I've Worked" />

      <div className="flex flex-col lg:flex-row gap-6 relative z-10">
        {/* Company tabs - horizontal scroll on mobile */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
          <div className="flex lg:flex-col min-w-fit lg:min-w-[200px]">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm sm:text-base text-left border-b-2 lg:border-l-2 lg:border-b-0 whitespace-nowrap transition-colors`}
                style={{
                  borderColor:
                    activeTab === index
                      ? "var(--accent)" // active border uses theme accent
                      : "var(--text-secondary)", // inactive border
                  color:
                    activeTab === index
                      ? "var(--accent)" // active text uses theme accent
                      : "var(--text-secondary)", // inactive text
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== index)
                    e.target.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== index)
                    e.target.style.color = "var(--text-secondary)";
                }}
              >
                {exp.company}
              </button>
            ))}
          </div>
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
          className="flex-1 min-w-0"
        >
          <div style={{ color: "var(--text-secondary)" }}>
            <h3
              className="text-lg sm:text-xl font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {experiences[activeTab].role}{" "}
              <span style={{ color: "var(--accent)" }}>
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p
              style={{ color: "var(--text-secondary)" }}
              className="text-xs sm:text-sm mb-4"
            >
              {experiences[activeTab].period}
            </p>

            <ul className="space-y-2 sm:space-y-3">
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
                  className="flex items-start text-sm sm:text-base"
                >
                  <span
                    className="mr-2 mt-1 min-w-[16px]"
                    style={{ color: "var(--accent)" }}
                  >
                    ▹
                  </span>
                  <span
                    style={{ color: "var(--text-secondary)" }}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    {item}
                  </span>
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
