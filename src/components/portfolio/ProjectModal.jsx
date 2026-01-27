import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, isOpen, setIsOpen }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl bg-white dark:bg-gray-800 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </DialogTitle>

          <DialogDescription className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              >
                {tech}
              </Badge>
            ))}
          </DialogDescription>
        </DialogHeader>

        {/* IMAGE */}
        <div className="mt-6">
          <img
            src={
              project.image ||
              "https://images.unsplash.com/photo-1517694712202-1428bc648cfo?auto=format&fit=crop&w=1470&q=80"
            }
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Live Demo */}
            <a
              href={project.live || undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !project.live && e.preventDefault()}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-colors
                ${
                  project.live
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-300 text-white cursor-not-allowed opacity-60"
                }`}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>

            {/* GitHub */}
            <a
              href={project.github || undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !project.github && e.preventDefault()}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-colors
                ${
                  project.github
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed opacity-60"
                }`}
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
