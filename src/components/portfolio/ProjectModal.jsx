import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, isOpen, setIsOpen }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-500 dark:text-gray-400">
            {project.tech.join(' • ')}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img src={project.image || "https://images.unsplash.com/photo-1517694712202-1428bc648cfo?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt={project.title} className="rounded-lg w-full h-64 object-cover mb-6" />
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <Github size={16} /> Source Code
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;