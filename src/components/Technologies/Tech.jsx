import "./TechStyles.css"
import { DiGithubBadge } from "react-icons/di";
import { SiMiro } from "react-icons/si";


export default function Tech() {

    return (
        <div className="tech-container">
        <div className="tech-icons">
            <h1>What I Know</h1>
            <ul className="tech">
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={70} alt="JavaScript" title="JavaScript" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width={70} alt="React" title="React"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width={70} alt="Redux" title="Redux"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width={70} alt="PostgreSQL" title="PostgreSQL"/></li>
                <li><img className="bg-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width={70} alt="NodeJs" title="NodeJs" /></li>
                <li><img className="bg-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width={70} alt="Express" title="Express"></img></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={70} alt="CSS" title="CSS"/></li>
                <li><img className="bg-white" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" width={70} alt="Sequelize" title="Sequelize"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width={70} alt="HTML5" title="HTML5"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={70} alt="Bootstrap" title="Bootstrap"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width={70} alt="MongoDB" title="MongoDB"/></li>
            </ul>
        </div>
        <div className="tech-tools-icons">
            <h1>Tools I Use</h1>
            <ul className="tools">
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width={70} alt="npm" title="npm"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" width={70} alt="git" title="git"/></li>
                <li className="img"><DiGithubBadge size={70} style={{ color: "#7546C1"}} alt="GitHub" title="GitHub"/></li>
                <li className="img"><SiMiro size={60} style={{ color: "#F4D35E"}} alt="Miro" title="Miro"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" width={60} alt="Slack" title="Slack"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" width={70} alt="vsCode" title="vsCode"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" width={70} alt="Trello" title="Trello"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg" width={70} alt="Google" title="Google"/></li>
            </ul>
        </div>
    </div>
    )
}