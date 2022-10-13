import "../WorkCards/ProjectCardStyles.css"
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
                        <a href={props.view} target="_blank"><button to={props.view} className="btn">View</button></a>
                        <a href={props.src} target="_blank"><button className="btn">Source</button></a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

