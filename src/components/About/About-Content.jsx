import "../About/About-ContentStyles.css"
import React from "react"
import { Link } from "react-router-dom"
import heroImg from "../../images/heroImg.jpg"
export default function About() {
    return (
        <>
            <div className="about">
                <div className="left">
                    <h1>Who am i?</h1>
                    <p>Im a web dev student at DigitalCrafts</p>
                    <Link to="/contact">
                        <button className="btn">Contact</button>
                    </Link>
                </div>
            </div>

        </>
    )
}
{/* <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link> */}