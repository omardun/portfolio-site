import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx"
import Image2 from "../components/image2/Image2"

export default function About() {
    return (
        <div>
            <Navbar />
            <Image2 heading="ABOUT" text="im a sull stack dev" />
            <Footer />
        </div>
    )
}