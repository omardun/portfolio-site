import ProjectCards from "./WorkCards/ProjectCards"
import ProjectCardData from "./WorkCardData"


export default function Work() {
    return (
        <>
            <div className="container">
                <h1 className="project-heading">
                    <div className="project-container">
                        {ProjectCardData.map((val, ind) => {
                            return (
                                <ProjectCards
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    text={val.text}
                                    view={val.view}
                                />
                            )
                        })}
                    </div>
                </h1>
            </div>
        </>
    )
}