import "./HomeStyles.css"
import introImg from "../../images/mainImage.jpg"
import { Link } from "react-router-dom"
import Resume from "../../images/omarosquero.pdf"
export default function MainImage() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={introImg} alt="main img"
                />
                <div className="content">
                    <p> omar rosquero</p>
                    <h1>Full-Stack Software Developer</h1>
                    <div className="buttons">
                    <Link to="/contact">
                        <button className="btn btn-light">Contact</button>
                    </Link>
                    <a target="_blank" rel="noreferrer" href={Resume}>
                        <button className="btn"> PDF Resume</button>
                    </a>
                </div>
                </div>
               
                
            </div>
        </div>
    )
}