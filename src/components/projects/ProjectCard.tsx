// src/components/projects/ProjectCard.tsx

import { Project } from "@/data/projects";
import ProjectStatusBadge from "./ProjectStatusBadge";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
            {/* Title */}
            <h3 className="text-xl font-semibold">
                {project.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {project.subtitle}
            </p>

            {/* Role & Company */}
            <div className="mt-4">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.role}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.company}
                    {project.location && ` • ${project.location}`}
                </p>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-7">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-5">
                <h4 className="font-semibold mb-2">
                    Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech.name}
                            className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200 text-xs font-medium"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Key Highlights */}
            <div className="mt-5">
                <h4 className="font-semibold mb-2">
                    Key Highlights
                </h4>

                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {project.highlights.map((item) => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Status */}
            {/* Status */}
            <div className="mt-6 flex items-center justify-between">
                <ProjectStatusBadge status={project.status} />

                {project.status === "Public" && project.appStoreUrl && (
                    <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:underline text-sm font-medium"
                    >
                        View on App Store →
                    </a>
                )}
            </div>
        </article>
    );
}