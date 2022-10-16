import "../About/About-ContentStyles.css"
import React from "react"
import { Link } from "react-router-dom"
import Knowledge from "../../images/knowledge.jpg"

export default function About() {
    return (
        <>
            <div className="about">
                <div className="left">
                    <h1>Who is Omar?</h1>
                    <p>Hello! I'm Omar, aside from coding I enjoy hanging out with my best friends, playing video games, listening to audio books at work, learning the elctrical trade, making custom stickers, and trading stocks. I enjoy learning new things, regardless if it's challenging. i belive stepping out of your comfort zone helps you become a better person.</p>
                    <img className="knowledge" src={Knowledge} alt=""/>
                    <Link to="/contact">
                        <button className="btn">Contact</button>
                    </Link>
                </div>
            </div>

        </>
    )
}
