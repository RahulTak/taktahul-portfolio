import { Experience } from "@/data/experience";

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    return (
        <article className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold">
                {experience.company}
            </h3>

            <p className="text-lg font-semibold mt-3">
                {experience.role}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.location}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {experience.startDate} • {experience.endDate}
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-7">
                {experience.description}
            </p>

            <div className="mt-5">
                <h4 className="font-semibold mb-2">
                    Key Achievements
                </h4>

                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {experience.achievements.map((achievement) => (
                        <li key={achievement}>
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-5">
                <h4 className="font-semibold mb-2">
                    Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200 text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}