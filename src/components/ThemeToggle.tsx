import React from "react";
import { useTheme } from "../context/ThemeProvider";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className="flex items-center justify-center cursor-pointer rounded-full bg-black dark:bg-white w-8 h-8"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <BsFillMoonFill className="text-zinc-800" />
      ) : (
        <BsFillSunFill className="text-zinc-200" />
      )}
    </div>
  );
};

export default ThemeToggle;