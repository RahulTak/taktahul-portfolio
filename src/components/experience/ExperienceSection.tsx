import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
    return (
        <section id="experience" className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
                Professional Experience
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Over 10 years of experience building enterprise-grade iOS applications,
                leading engineering teams and delivering scalable mobile solutions across
                multiple industries.
            </p>

            <div className="space-y-6">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
}