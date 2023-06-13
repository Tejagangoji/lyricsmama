import { Html } from 'next/document';
import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();

export const useDarktheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };
    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? "darkmode" : "brightmode"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
