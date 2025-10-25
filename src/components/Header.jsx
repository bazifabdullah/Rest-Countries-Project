import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md px-6 py-4 transition-colors duration-300">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">
        Where in the world?
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 text-gray-900 dark:text-white font-medium"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 1113.003 2.248a.75.75 0 01.843.99A7.501 7.501 0 0021 15.001a.75.75 0 01-.99.843h-.258z"
            />
        </svg>

        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
