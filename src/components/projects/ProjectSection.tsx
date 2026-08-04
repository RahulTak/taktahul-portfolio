// src/components/projects/ProjectSection.tsx

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-2">
        Featured Projects
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        A selection of enterprise and commercial iOS applications I've worked on throughout my career.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}