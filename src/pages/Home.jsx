import React, { useState, useEffect } from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Banner from './Banner';

const Home = () => {
    // Get initial theme from localStorage or default to "light"
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        // Apply theme to the entire page
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <div>
                <div>
                    <Banner></Banner>                    
                </div>
            </div>
            <Footer theme={theme} />
        </div>
    );
};

export default Home;
