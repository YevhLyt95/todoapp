import { useTheme } from "../context/ThemeContext";
const ThemeToggle = () => {
  const {isDark, toggleTheme} = useTheme();

  return (
    <button onClick={toggleTheme} 
      className="mb-4 ml-auto block px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-blue-400 cursor-pointer transition-colors">
      {isDark ? "🌙 Dark" : "☀️ Light"}    
    </button>
  );
};

export default ThemeToggle;