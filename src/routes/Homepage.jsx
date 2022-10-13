import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MainImage from "../components/MainImage/MainImage.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Work from "../components/Work"

export default function Homepage() {
    return (
        <>
        <Navbar />
        <MainImage />
        <Work />
        <Footer />
        </>
    )
}