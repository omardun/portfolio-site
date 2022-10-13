import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import Image2 from "../components/image2/Image2"
import Form from "../components/Contact/Form"

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Image2 heading="CONTACT" text="contact me"/>
            <Form />
            <Footer />
        </div>
    )
}