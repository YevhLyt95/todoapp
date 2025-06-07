import { use } from "react";
import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark]  = useState(() =>
        localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if(isDark){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return(
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => useContext(ThemeContext);