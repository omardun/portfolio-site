import "../Contact/FormStyles.css"

export default function Form() {
    return (
        <>
            <div className="form">
                <form>
                    <label>Your Name</label>
                    <input type="text" placeholder="Your name"></input>
                    <label>Email</label>
                    <input type="email" placeholder="Your Email"></input>
                    <label>Subject</label>
                    <input type="text" placeholder="Subject"></input>
                    <label>Message</label>
                    <textarea rows="6" placeholder="Type your Message" />
                    <button className="btn">Submit</button>
                </form>
            </div>
        </>
    )
}