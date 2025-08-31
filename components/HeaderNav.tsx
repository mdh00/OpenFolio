
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function HeaderNav() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow flex justify-between items-center px-8 py-4 mb-8 z-30">
      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-blue-950 dark:text-yellow-400 hover:underline font-semibold"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
      {/* Theme Switch Button - only show after mounted */}
      {mounted && (
        <button
          className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Toggle dark mode"
        >
          {resolvedTheme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      )}
    </nav>
  );
}
