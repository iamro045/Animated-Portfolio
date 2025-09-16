import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function TimelineSection() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2022 - 2026",
      description: "Currently pursuing my undergraduate degree with focus on Software Engineering, Data Structures, and Machine Learning. Maintaining a CGPA of 7.5/10.",
      status: "current"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "K.A.A.N.M. Sonawane Arts, Science and Commerce College, SATANA",
      period: "2020 - 2022", 
      description: "Completed with 52.83% marks in Science stream with Mathematics, Physics and Chemistry.",
      status: "completed"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Janta Vidyalaya Vaygaon, Dundhe",
      period: "2009 - 2019",
      description: "Completed with 87% marks. Active participant in science competitions.",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer engineering and technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.status === 'current' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                        {item.status === 'current' && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 w-6 h-6 my-4 md:my-0 hidden md:block">
                  <div className={`w-6 h-6 rounded-full border-4 ${
                    item.status === 'current'
                      ? 'bg-blue-500 border-blue-200'
                      : 'bg-white border-blue-300'
                  } shadow-lg`}>
                    {item.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                    )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}