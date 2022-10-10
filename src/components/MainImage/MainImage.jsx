import "../MainImage/MainImageStyles.css"
import introImg from "../../images/mainImage.jpg"
import heroImg from "../../images/heroImg.jpg"

import { Link } from "react-router-dom"

export default function MainImage() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={introImg} alt="mainimg"
                />
                <div className="content">
                <p>Hi im omar rosquero</p>
                <h1>Im a fullstack web developer</h1>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
                
            </div>
        </div>
    )
}