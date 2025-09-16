import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Brain, Sparkles } from "lucide-react";
import RohitImg from "@/assets/Rohit.jpg";

export default function AboutSection() {
  const highlights = [
    { icon: Code2, title: "Full-Stack Development", color: "text-blue-600 bg-blue-50" },
    { icon: Database, title: "Data Science", color: "text-indigo-600 bg-indigo-50" },
    { icon: Brain, title: "Artificial Intelligence", color: "text-purple-600 bg-purple-50" },
    { icon: Sparkles, title: "Problem Solving", color: "text-cyan-600 bg-cyan-50" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl rotate-3 transform-gpu transition-transform group-hover:rotate-6"></div>
              <img
                src={RohitImg} 
                alt="Rohit Shinde"
                className="relative w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am passionate about AI, Data Science, and Full-Stack Development. 
              Currently pursuing Computer Engineering, I love turning complex problems 
              into elegant solutions through code and data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring the latest in machine learning, 
              contributing to open-source projects, or learning new technologies that 
              push the boundaries of what's possible.
            </p>

            {/* Highlight Cards */}
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
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
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