import "./HomeStyles.css"
import introImg from "../../images/mainImage.jpg"
import { Link } from "react-router-dom"

export default function MainImage() {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={introImg} alt="main img"
                />
                <div className="content">
                    <p>Hi im omar rosquero</p>
                    <h1>I'm a Full-Stack Web Developer</h1>
                    <div className="buttons">
                    <Link to="/contact">
                        <button className="btn">Contact</button>
                    </Link>
                    <Link to="/project">
                        <button className="btn btn-light">Project</button>
                    </Link>
                </div>
                </div>
               
                
            </div>
        </div>
    )
}