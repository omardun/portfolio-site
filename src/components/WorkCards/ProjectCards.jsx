import "../WorkCards/ProjectCardStyles.css"
import { NavLink } from "react-router-dom"
export default function ProjectCards(props) {
    return (
        <>
                <div className="project-card">
                                <img src={props.imgsrc} />
                                <h2 className="project-title">{props.title}
                                </h2>
                                <div className="pro-details">
                                    <p>{props.text}</p>
                                    <div className="pro-buttons">
                                        <NavLink to={props.view} className="btn">View</NavLink>
                                        <NavLink to="https://github.com/omardun/react-store" className="btn">Source</NavLink>
                                    </div>
                                </div>
                            </div>
        </>
    )
}