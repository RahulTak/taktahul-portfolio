import { SkillCategory as SkillCategoryType } from "@/data/skills";
import SkillBadge from "./SkillBadge";

interface SkillCategoryProps {
    category: SkillCategoryType;
}

export default function SkillCategory({
    category,
}: SkillCategoryProps) {
    return (
        <article className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-4">
                {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <SkillBadge
                        key={skill}
                        skill={skill}
                    />
                ))}
            </div>
        </article>
    );
}