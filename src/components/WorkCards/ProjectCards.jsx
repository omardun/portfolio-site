import "../WorkCards/ProjectCardStyles.css"
import ReactGaming from "../../images/ReactGaming1.jpg"
import { NavLink } from "react-router-dom"
export default function ProjectCards() {
    return (
        <>
                <div className="container">
                    <h1 className="project-heading">
                        <div className="project-container">
                            <div className="project-card">
                                <img src={ReactGaming} />
                                <h2 className="project-title">
                                    title
                                </h2>
                                <div className="pro-details">
                                    <p>This is text</p>
                                    <div className="pro-buttons">
                                        <NavLink to="url.com" className="btn">View</NavLink>
                                        <NavLink to="url.com" className="btn">Source</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h1>
                </div>
        </>
    )
}