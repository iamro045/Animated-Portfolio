import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Brain, Sparkles } from "lucide-react";
import RohitImg from "@/assets/Rohit.jpeg";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900/40",
    },
    {
      icon: Database,
      title: "Data Science",
      color: "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/40",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900/40",
    },
    {
      icon: Sparkles,
      title: "Problem Solving",
      color: "text-cyan-600 bg-cyan-100 dark:bg-cyan-900/40",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 relative py-24 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* subtle blend from hero */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-50/60 to-transparent dark:from-gray-900 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14 items-center">
          {/* IMAGE WITH BLUE GLOW */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* blue glow */}
              <div
                className="absolute inset-0 rounded-full 
                           bg-blue-500/30 dark:bg-blue-400/25
                           blur-[80px] scale-110 opacity-80
                           group-hover:opacity-100 transition duration-500"
              />

              {/* photo card */}
              <div className="relative w-64 h-64 rounded-full bg-white dark:bg-gray-800 p-2 shadow-xl">
                <img
                  src={RohitImg}
                  alt="Rohit Shinde"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXT + CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am passionate about AI, Data Science, and Full-Stack Development.
              Currently pursuing Computer Engineering, I love turning complex
              problems into elegant solutions through code and data.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              When I'm not coding, you'll find me exploring the latest in machine
              learning, contributing to open-source projects, or learning new
              technologies that push the boundaries of what's possible.
            </p>

            {/* HIGHLIGHT CARDS */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl
                               shadow-md hover:shadow-xl transition-all duration-300
                               border border-gray-100 dark:border-gray-700"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${item.color}
                                  flex items-center justify-center mb-3`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
