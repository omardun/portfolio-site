import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import Image2 from "../components/image2/Image2"
import Form from "../components/Contact/Form"

export default function Contact() {
    return (
        <div>
            <Navbar />
            <Image2 heading="CONTACT ME" text="Lets chat! Send me a message or use my social links below" />
            <Form />
            <Footer />
        </div>
    )
}