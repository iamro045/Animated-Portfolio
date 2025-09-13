
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Users, Target, Shield, ArrowRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Real-Time Collaborative To-Do Board",
      description: "A dynamic task management platform built with MERN stack featuring real-time collaboration and team workspace management.",
      fullDescription: "This project is a full-featured task management application similar to Trello. It uses Socket.io for real-time updates, allowing multiple users to see changes instantly. The backend is built with Node.js and Express, connected to a MongoDB database for persistent storage. The frontend is a responsive React application with drag-and-drop functionality implemented using react-beautiful-dnd.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      icon: Users,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Goal Tracker App",
      description: "Personal productivity application with milestone tracking, progress visualization, and motivational insights.",
      fullDescription: "A cross-platform mobile app built with React Native and Expo. It allows users to set personal or professional goals, break them down into smaller milestones, and track their progress over time. Data is stored and synchronized using Firebase Firestore. The app features custom charts and graphs (using Chart.js) to visualize progress and provides motivational notifications.",
      tech: ["React Native", "Firebase", "Chart.js"],
      icon: Target,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      title: "AI Content Moderation System",
      description: "Machine learning powered system using NLP and computer vision to automatically detect and filter inappropriate content.",
      fullDescription: "This is a backend system that provides an API for content moderation. It uses a TensorFlow model trained on a large dataset to classify text for toxicity and hate speech. For images, it uses a pre-trained computer vision model to detect inappropriate content. The system is exposed via a Flask REST API and deployed on AWS for scalability.",
      tech: ["Python", "TensorFlow", "Flask", "AWS"],
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-gray-900">
      <ProjectModal project={selectedProject} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <div className="max-w-6xl mx-auto px-6">
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in 
            full-stack development, data science, and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50, rotateY: -30 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, type: 'spring' }}
                    className="[perspective:1000px] cursor-pointer"
                    onClick={() => handleCardClick(project)}
                >
                    <motion.div
                        whileHover="hover"
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
                    >
                        <div className={`h-32 ${project.bgColor} relative overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Icon className={`w-12 h-12 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 rounded-full text-sm font-medium">
                                    {tech}
                                </span>
                                ))}
                            </div>

                            <motion.div
                                variants={{ hover: { color: "#3b82f6" } }}
                                className="flex items-center gap-2 font-semibold text-gray-600 dark:text-gray-400 mt-auto"
                            >
                                View Details <motion.span variants={{ hover: { x: 5 } }}><ArrowRight size={16} /></motion.span>
                            </motion.div>
                        </div>
                    </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
