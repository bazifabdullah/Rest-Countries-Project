import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md px-6 py-4 transition-colors duration-300">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white cursor-pointer">
        Where in the world?
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:opacity-80 transition-all ease-in-out cursor-pointer"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
