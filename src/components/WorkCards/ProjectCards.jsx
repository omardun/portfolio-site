import "../WorkCards/ProjectCardStyles.css"
export default function ProjectCards(props) {

    return (
        <>
            <div className="project-card">
                <a href={props.view}target="_blank" rel="noreferrer" ><img src={props.imgsrc} alt={""}/></a>
                <h2 className="project-title">{props.title}
                </h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                </div>
                <div className="pro-buttons">
                        <a href={props.view} target="_blank" rel="noreferrer" ><button to={props.view} className="btn">View</button></a>
                        <a href={props.src} target="_blank" rel="noreferrer" ><button className="btn">Source</button></a>
                    </div>
            </div>
        </>
    )
}

