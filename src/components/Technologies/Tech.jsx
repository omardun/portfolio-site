import "./TechStyles.css"
import { DiGithubBadge } from "react-icons/di";
// import { IconName } from "react-icons/di";
// import { IconName } from "react-icons/di";
export default function Tech() {
    return (
        <div className="tech-container">
        <div className="tech-icons">
            <h1>What I Know....</h1>
            <ul className="tech">
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={70} alt={"dhjsdhjsvf"} /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width={90} alt={"JavaScript"} /></li>
                <li><i class="devicon-express-original-wordmark colored"></i></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width={70} alt={"JavaScript"}/></li>
                <li><i class="devicon-sequelize-plain-wordmark colored"></i></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>

            </ul>
        </div>
        <div className="tech-tools-icons">
            <h1>Tools I Use...</h1>
            <ul className="tools">
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><DiGithubBadge size={70} style={{ color: "#7546C1", marginRight: "2rem" }} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" width={70} alt={"JavaScript"}/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg" width={70} alt={"JavaScript"}/></li>
            </ul>
        </div>
    </div>
    )
}