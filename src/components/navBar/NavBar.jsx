import React from "react";

import iconGithub from "../../assets/github.png"
import iconLinkedin from  "../../assets/linkedin.png"
import logo from "../../assets/settings.png"
import "./NavBar.css"

export default function Header () {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header_search">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="header_nav">
                <div className="header_options">
                <a href="#about" className="header_option">About</a>
                <a href="#projects" className="header_option">Projects</a>
                <a href="#contact" className="header_option">Contact</a>
                <a href="https://github.com/jhonatandzg" className="header_option">
        <img src={iconGithub} alt="GitHub" className="header_option_icon"/>
                </a>
                <a href="https://www.linkedin.com/in/jhonatan-zuñiga/" className="header_option">
        <img src={iconLinkedin} alt="LinkedIn" className="header_option_icon"/>
                </a>
                </div>
          
            </div>
        </header>
    )
}