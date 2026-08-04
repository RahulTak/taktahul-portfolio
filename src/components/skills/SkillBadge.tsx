interface SkillBadgeProps {
    skill: string;
}

export default function SkillBadge({
    skill,
}: SkillBadgeProps) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200">
            {skill}
        </span>
    );
}