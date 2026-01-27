import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Leaf, Zap } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      name: "Python",
      level: 90,
      icon: Code,
      color: ["#FACC15", "#CA8A04"], // yellow
      bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
      textColor: "text-yellow-700 dark:text-yellow-400",
    },
    {
      name: "Data Science",
      level: 85,
      icon: Database,
      color: ["#A855F7", "#6D28D9"], // purple
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
      textColor: "text-purple-700 dark:text-purple-400",
    },
    {
      name: "Web Development",
      level: 80,
      icon: Globe,
      color: ["#22C55E", "#15803D"], // green
      bgColor: "bg-green-50 dark:bg-green-900/30",
      textColor: "text-green-700 dark:text-green-400",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: Leaf,
      color: ["#22C55E", "#166534"],
      bgColor: "bg-green-50 dark:bg-green-900/30",
      textColor: "text-green-700 dark:text-green-400",
    },
    {
      name: "React",
      level: 70,
      icon: Zap,
      color: ["#22D3EE", "#0284C7"], // cyan
      bgColor: "bg-cyan-50 dark:bg-cyan-900/30",
      textColor: "text-cyan-700 dark:text-cyan-400",
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise and proficiency across technologies
          </p>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const circumference = 2 * Math.PI * 40;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6
                           shadow-lg hover:shadow-xl transition-all
                           border border-gray-100 dark:border-gray-700"
              >
                {/* HEADER */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${skill.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Proficiency
                    </p>
                  </div>
                </div>

                {/* PROGRESS CIRCLE */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200 dark:text-gray-700"
                      stroke="currentColor"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{
                        strokeDashoffset:
                          circumference * (1 - skill.level / 100),
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={skill.color[0]} />
                        <stop offset="100%" stopColor={skill.color[1]} />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* BAR */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
