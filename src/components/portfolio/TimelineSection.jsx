import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function TimelineSection() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2022 - 2026",
      description:
        "Currently pursuing my undergraduate degree with focus on Software Engineering, Data Structures, and Machine Learning. Maintaining a CGPA of 7.5/10.",
      status: "current",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution:
        "K.A.A.N.M. Sonawane Arts, Science and Commerce College, Satana",
      period: "2020 - 2022",
      description:
        "Completed with 52.83% marks in Science stream with Mathematics, Physics and Chemistry.",
      status: "completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Janta Vidyalaya Vaygaon, Dundhe",
      period: "2009 - 2019",
      description:
        "Completed with 87% marks. Active participant in science competitions.",
      status: "completed",
    },
  ];

  return (
    <section
      id="education"
      className="scroll-mt-24 py-24 bg-gray-50 dark:bg-gray-900"
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
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey in computer engineering and technology
          </p>
        </motion.div>

        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2
                          bg-gradient-to-b from-blue-500/60 to-indigo-500/60
                          rounded-full hidden md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* CARD */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6
                               shadow-lg hover:shadow-xl transition-shadow
                               border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.status === "current"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        <GraduationCap className="w-6 h-6" />
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                        {item.status === "current" && (
                          <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium
                                           bg-green-100 text-green-800
                                           dark:bg-green-900/40 dark:text-green-400">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* NODE */}
                <div className="relative z-10 hidden md:block">
                  <div
                    className={`w-6 h-6 rounded-full border-4 shadow-lg ${
                      item.status === "current"
                        ? "bg-blue-500 border-blue-200"
                        : "bg-white dark:bg-gray-900 border-blue-300"
                    }`}
                  >
                    {item.status === "current" && (
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                    )}
                  </div>
                </div>

                {/* SPACER */}
                <div className="w-full md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
