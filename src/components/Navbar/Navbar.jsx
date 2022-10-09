import { Link } from "react-router-dom"
import "../Navbar/NavbarStyles.css"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
                ) : (<FaBars size={20} style={{ color: "#fff" }} />)}

            </div>
        </div>
    )
}