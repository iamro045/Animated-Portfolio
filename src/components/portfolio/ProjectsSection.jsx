import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Target, Shield, ArrowRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Brilliant.org Clone",
      description:
        "A responsive learning platform inspired by Brilliant.org, built using React and Vite.",
      fullDescription:
        "Designed and developed a modular, component-driven learning platform inspired by Brilliant.org. Implemented client-side routing for smooth navigation, reusable UI components for scalability, and modern CSS practices to ensure responsiveness across devices. Focused on clean architecture and performance optimization.",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Groott – Fruit E-Commerce Website",
      description:
        "A complete fruit e-commerce frontend with modern UI and cart functionality.",
      fullDescription:
        "Developed a fully functional fruit e-commerce frontend featuring product listings, detailed product pages, quantity management, and add-to-cart functionality. Designed a modern dark-themed UI focused on usability and visual clarity. Managed component-level state efficiently and ensured responsive behavior across devices.",
      tech: ["React", "JavaScript", "CSS", "React Router"],
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "SafeSpace – AI Content Moderation System",
      description:
        "AI-powered system to detect and filter harmful or inappropriate content.",
      fullDescription:
        "Developed an NLP-based content moderation system using a BERT model to classify multilingual text with 92% accuracy. Integrated Explainable AI techniques (LIME) to interpret predictions. Gained hands-on experience in data preprocessing, model evaluation, and backend integration for real-world AI applications.",
      tech: ["Python", "BERT", "NLP", "Explainable AI"],
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 bg-slate-50 dark:bg-gray-900"
    >
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />

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
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selected projects showcasing my work in full-stack development, data
            science, and AI.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                              bg-gradient-to-r ${project.gradient}
                              blur-2xl transition duration-500`}
                />

                {/* Card */}
                <div
                  className="relative bg-white dark:bg-gray-800 rounded-2xl
                                shadow-lg hover:shadow-2xl transition-all duration-300
                                overflow-hidden h-full flex flex-col
                                border border-gray-100 dark:border-gray-700"
                >
                  {/* Icon header */}
                  <div className={`h-32 ${project.bgColor} relative`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className={`w-12 h-12 bg-gradient-to-r ${project.gradient}
                                        bg-clip-text text-transparent`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3
                                   group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700
                                     dark:bg-blue-900/50 dark:text-blue-300
                                     rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-2 font-semibold
                                    text-gray-600 dark:text-gray-400 mt-auto
                                    group-hover:text-blue-600 dark:group-hover:text-blue-400
                                    transition-colors"
                    >
                      View Details
                      <motion.span
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
