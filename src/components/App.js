import React, { Component } from 'react';
import '../styles/App.css';
import $ from 'jquery';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

class App extends Component {
    render() {
        //copy paste, uses jQuery to animate scrolling to hash
        //basically only gets a where href has a hash (#) and animates to its offsetTop
        $(document).on('click', 'a[href^="#"]', function (e) {
            // target element id
            var id = $(this).attr('href');

            // target element
            var $id = $(id);
            if ($id.length === 0) {
                return;
            }

            // prevent standard hash navigation (avoid blinking in IE)
            e.preventDefault();

            // top position relative to the document
            var pos = $id.offset().top;

            // animated top scrolling
            $('body, html').animate({ scrollTop: pos }, 1000);
        });

        return (
            <div className="App">
                <section className="home" id="Home">
                    <Home />
                </section>
                <section className="skills" id="Skills">
                    <Skills />
                </section>
                <div className="seperator"></div>
                <section className="projects" id="Projects">
                    <Projects />
                </section>
                <div className="seperator"></div>
                <section className="contact" id="Contact">
                    <Contact />
                </section>
                <div className="footer">
                    <div className="footerInner">
                        Website created by Ludwig Linder, 2018.
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
