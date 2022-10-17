import "./HomeStyles.css"
import introImg from "../../images/mainImage.jpg"
import { Link } from "react-router-dom"
import resume from "../../images/Resume.pdf"
export default function MainImage() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={introImg} alt="main img"
                />
                <div className="content">
                    <p> omar rosquero</p>
                    <h1>I'm a Full-Stack Web Developer</h1>
                    <div className="buttons">
                    <Link to="/contact">
                        <button className="btn btn-light">Contact</button>
                    </Link>
                    <a href={resume}>
                        <button className="btn">Resume</button>
                    </a>
                </div>
                </div>
               
                
            </div>
        </div>
    )
}