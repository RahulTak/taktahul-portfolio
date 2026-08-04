import { skillCategories } from "@/data/skills";
import SkillCategory from "./SkillCategory";

export default function SkillsSection() {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold mb-2">
                Technical Skills
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Technologies, frameworks and tools I've used to build scalable,
                enterprise-grade iOS applications over the past decade.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category) => (
                    <SkillCategory
                        key={category.title}
                        category={category}
                    />
                ))}
            </div>
        </section>
    );
}