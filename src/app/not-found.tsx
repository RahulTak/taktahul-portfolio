import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
      <div className="max-w-2xl text-center">

        <p className="text-7xl md:text-8xl font-extrabold text-gray-200 dark:text-gray-800">
          404
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
          Sorry, the page you're looking for doesn't exist,
          may have been moved, or the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            ← Back to Home
          </Link>

          <Link
            href="/#projects"
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/#experience"
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Experience
          </Link>

          <Link
            href="/#contact"
            className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>

        </div>
      </div>
    </main>
  );
}