import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefer-color-scheme:dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }

    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <>
            <div className="relative w-16 h-8 bg-gray-200 ring-2 ring-gray-300 dark:bg-gray-800 dark:ring-gray-700 rounded-full p-1 cursor-pointer" onClick={toggleTheme}>
                <div className={`absolute top-1 transition-transform duration-300 ease-in-out transform ${isDark ? 'translate-x-7' : 'translate-x-0'}`}>
                    {
                        isDark ? <FaMoon className="text-yellow-400 w-6 h-6" /> : <FaSun className="text-yellow-500 w-6 h-6" />
                    }
                </div>
            </div>
        </>
    )
}

export default ToggleTheme