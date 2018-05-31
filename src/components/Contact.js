import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contactWrapper">
                <h2>Contact</h2>
                If you have any inquiries please use the email below.<br />
                Ludwigclinder@gmail.com
                <div className="links">
                    <a href="https://www.linkedin.com/in/ludwig-linder-565036151"><img src="/linkedin.png" alt="LinkedIn" width="100px" /></a>
                    <a href="https://github.com/LinderVII"><img src="/github.png" alt="GitHub" width="100px" /></a>
                </div>
            </div>
        );
    }
}

export default Contact;
