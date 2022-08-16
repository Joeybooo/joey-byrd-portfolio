import React from "react";

function Contact(props) {
    return (
        <div className="contact-card">
            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <a href="mailto:joeybyrd9999@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>
                    <a href='https://github.com/Joeybooo'>Github</a>
                    <a href='https://www.linkedin.com/in/joey-byrd-b227191a9/'>LinkedIn</a>
                    <a href="">Social Media</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
