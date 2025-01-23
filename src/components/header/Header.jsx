import React, { useState } from 'react'
import './Header.css'
import { FaLocationArrow, FaRegMoon, FaRegSun } from 'react-icons/fa'

const Header = () => {
    const [darkTheme, setDarkTheme] = useState("light")




    const handleThemeChange = () => {

        console.log("BUTTON IS CLICEKD")

        const theme = darkTheme === "light" ? "dark" : "light"
        setDarkTheme(theme)
        document.documentElement.setAttribute("data-theme", theme)
    }


    const headerListItems = [
        {
            name: "Home",
            route: "/"
        },
        {
            name: "About me",
            route: "/aboutme"
        },
        {
            name: "Services",
            route: "/services"
        },
        {
            name: "My Work",
            route: "/mywork"
        },
        {
            name: "Contact Me",
            route: "/contactme"
        },
    ]


    return (
        <header className='header'>

            <div className='header-logo'>
                <h1>Abdul Basit</h1>
                <span className='name-dot'></span>
            </div>



            <ul className='header-list-items'>
                {headerListItems.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>


            <div className='header-buttons'>
                         <button onClick={handleThemeChange}>
                    {darkTheme === "light" ? <FaRegMoon size={28} /> : <FaRegSun size={28} />}
                </button>
                <button className='contact-button'>
                    Contact
                    <FaLocationArrow />
                </button>
            </div>


        </header>
    )
}

export default Header
