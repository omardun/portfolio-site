import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx"
import Image2 from "../components/image2/Image2"
import AboutContent from "../components/About/About-Content"

export default function About() {
    return (
        <div>
            <Navbar />
            <Image2 heading="ABOUT ME" />
            <AboutContent />
            <Footer />
        </div>
    )
}
