import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx"
import Image2 from "../components/image2/Image2"
import Work from "../components/Work"
import Tech from "../components/Technologies/Tech"

export default function Project() {
    return (
        <div>
            <Navbar />
            <Image2 heading="PROJECTS." text="Some of my recent work, will updated soon!" />
            <Tech/>
            <Work />
            <Footer />
        </div>
    )
}
