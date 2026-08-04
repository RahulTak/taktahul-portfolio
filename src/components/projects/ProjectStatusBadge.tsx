interface ProjectStatusBadgeProps {
  status: "Public" | "Enterprise" | "Confidential";
}

export default function ProjectStatusBadge({
  status,
}: ProjectStatusBadgeProps) {
  const styles = {
    Public:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",

    Enterprise:
      "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",

    Confidential:
      "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}