import React, { useState } from 'react'
import './Header.css'
import { FaLocationArrow, FaRegMoon, FaRegSun } from 'react-icons/fa'

const Header = () => {
    const [darkTheme, setDarkTheme] = useState("light");

    const handleThemeChange = () => {
        const theme = darkTheme === "light" ? "dark" : "light";
        setDarkTheme(theme);
        document.documentElement.setAttribute("data-theme", theme);
    };

    // Scroll function
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const headerListItems = [
        { name: "Home", id: "home" },
        { name: "About me", id: "aboutme" },
        { name: "Services", id: "services" },
        { name: "My Work", id: "mywork" },
        { name: "Contact Me", id: "contactme" } // Ensure this ID matches the form section
    ];

    return (
        <header className='header'>
            <div className='header-logo'>
                <h1>Abdul Basit</h1>
                <span className='name-dot'></span>
            </div>

            <ul className='header-list-items'>
                {headerListItems.map((item, index) => (
                    <li key={index}>
                        <button className='li-button' onClick={() => scrollToSection(item.id)}>{item.name}</button>
                    </li>
                ))}
            </ul>

            <div className='header-buttons'>
                <button onClick={handleThemeChange} className='dark-theme-button'>
                    {darkTheme === "light" ? <FaRegMoon size={28} /> : <FaRegSun size={28} />}
                </button>
                {/* Contact button scrolls to form section */}
                <button className='contact-button' onClick={() => scrollToSection("contactme")}>
                    Contact
                    <FaLocationArrow />
                </button>
            </div>
        </header>
    );
};

export default Header;
