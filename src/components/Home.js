import React, { Component } from 'react';
import Navigation from './Navigation';

class Home extends Component {
    render() {
        return (
            <div className="homeWrapper">
                <Navigation />
                <div className="introduction">
                    <h2>Website and App Developer</h2>
                    <p>
                        Hello, I'm Ludwig Linder. Full-stack developer from J&ouml;nk&ouml;ping, Sweden. Able to create anything from a great UI to a stable API.
                        If you are in need of a website or app you can contact me <a href="#Contact">here</a> and I will guide you through the entire process.
                    </p>
                    <div className="btnWrapper">
                        <a href="#Contact" className="websiteBtn">I need a website/app ></a>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;

