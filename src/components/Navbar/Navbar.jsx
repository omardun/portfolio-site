import { Link } from "react-router-dom"
import "../Navbar/NavbarStyles.css"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
// import resume from "../../images/Resume.pdf"

export default function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Omar Rosquero</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="https://634ed351b6e2dd05d29a87e9--flourishing-truffle-5c385a.netlify.app/" target="_blank" rel="noreferrer">
                        <>Online Resume</>
                    </a>
                </li>
                <li>
                    <Link to="/project">Projects</Link>
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
