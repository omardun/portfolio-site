import "../Footer/FooterStyles.css"
import React from "react"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import gmail from "../../images/gmail.png"
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="email">
                        <a href="mailto:omarosquero@gmail.com">
                            <img src={gmail} width={40} style={{ marginRight: "1rem" }} alt="gmail" title="gmail" />
                        </a>
                        <a href="mailto:omarosquero@gmail.com">
                            <p>omarosquero@gmail.com</p>
                        </a>
                    </div>
                    <div className="linkedIn">
                        <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/" target="_blank" rel="noreferrer" title="linkedIn">
                            <FaLinkedin size={40} style={{ color: "#007CBE", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/omar-rosquero-55403524b/" target="_blank" rel="noreferrer" >
                            <p>omar rosquero</p>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="social">
                        <a href="https://github.com/omardun" target="_blank" rel="noreferrer" title="GitHub">
                            <FaGithub size={40} style={{ color: "#7546C1", marginRight: "2rem" }} />
                        </a>
                        <a href="https://medium.com/@omarosquero" target="_blank" rel="noreferrer" title="Medium">
                            <BsMedium size={40} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://twitter.com/omarosquero" target="_blank" rel="noreferrer" title="twitter" >
                            <FaTwitter size={40} style={{ color: "#007CBE", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}