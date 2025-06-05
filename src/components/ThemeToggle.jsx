import { useEffect, useState } from "react";

const ThemeToggle = () => {
    //dark theme from logical storage
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    //apply class to <html> and save the choice
    useEffect(() => {
        const root = document.documentElement;
        if(isDark){
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return(
        <button
            onClick={() => setIsDark(!isDark)}
            className="mb-4 ml-auto block px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-blue-400 cursor-pointer"
        >
            {isDark ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;