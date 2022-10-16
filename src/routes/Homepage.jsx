import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Work from "../components/Work"
export default function Homepage() {
    return (
        <>
            <Navbar />
            <Home />
            <Work />
            <Footer />
        </>
    )
}