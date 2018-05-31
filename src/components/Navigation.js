import React, { Component } from 'react';
import logo from '../lclinderlogo.png';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <div className="navigation">
                    <a href="#Home">Home</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default Navigation;
