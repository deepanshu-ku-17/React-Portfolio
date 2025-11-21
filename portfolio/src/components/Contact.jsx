
import React, { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch("/", {
            method: "POST",
            body: data,
        })
        .then(() => {
            setSubmitted(true);
            form.reset();
        })
        .catch((error) => alert(error));
    };
    return (
        <section className="contact" id="contact">
            <span className="h-line">
                <i className="ri-shining-2-line"></i>Contact
            </span>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h2>Got a Project <span>Let's Talk</span></h2>
                    <div className="email">
                        <p>Email:</p>
                        <h6>Dipanshuroy584@gmail.com</h6>
                    </div>
                    <div className="num">
                        <p>Call:</p>
                        <h6>+91 7834868865</h6>
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/deepanshu-ku-17"><i className="ri-github-line"></i></a>
                        <a href="http://www.linkedin.com/in/deepanshu-kumar-5604b1239"><i className="ri-linkedin-line"></i></a>
                        <a href="mailto:dipanshuroy584@gmail.com"><i className="ri-mail-line"></i></a>
                        <a href="https://www.instagram.com/17_deepanshu/"><i className="ri-instagram-line"></i></a>
                    </div>
                </div>
                <form 
                    className="contact-form"
                    name="contact-form"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact-form" />
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Email Address..." required />
                    <textarea name="message" placeholder="Write Message here..." required />
                    <button type="submit" className="submit-btn">Submit Now</button>
                    {submitted && (
                        <p style={{ color: "#c28b78", marginTop: "15px", fontSize: "18px" }}>
                            ✔ Thank you! Your message has been sent.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
