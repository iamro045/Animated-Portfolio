import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Leaf, Zap } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      name: "Python",
      level: 90,
      icon: Code,
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700"
    },
    {
      name: "Data Science",
      level: 85,
      icon: Database,
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      name: "Web Development",
      level: 80,
      icon: Globe,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      name: "MongoDB",
      level: 75,
      icon: Leaf,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      name: "React",
      level: 70,
      icon: Zap,
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical expertise and proficiency levels across different technologies and domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                {/* Skill Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${skill.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-500">Proficiency Level</p>
                  </div>
                </div>

                {/* Progress Circle */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    {/* Progress circle */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient-${index})"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      whileInView={{ 
                        strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100) 
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={skill.color.split(' ')[1]} />
                        <stop offset="100%" stopColor={skill.color.split(' ')[3]} />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Percentage Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-2xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                </div>

                {/* Skill Bar (Alternative visual) */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "TypeScript", "Node.js", "Express.js", "PostgreSQL", 
              "Git", "Docker", "AWS", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}