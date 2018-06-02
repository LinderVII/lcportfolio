import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="projectsSectionWrapper">
                <h2>Projects</h2>
                <p>Projects I am working on or have worked on. Click on a project for a <b>live demo</b>.</p>
                <div className="projectsWrapper">
                    <div className="project">
                        <a href="/epsilon">
                            <img src="/epsilon.png" alt="Epsilon C" />
                            <b>Epsilon C</b><br />
                            120~ downloads<br />
                            A school project for gathering a high school-student's entire day in one app.
                        </a>
                    </div>
                    <div className="project">
                        <a href="/lcstart">
                            <img src="/lcstart.png" alt="LCStart" />
                            <b>LCStart</b><br />
                            1 user<br />
                            Personal Start-page for me. <br />
                            No live demo avaliable
                        </a>
                    </div>
                    <div className="project">
                        <a href="/memeories">
                            <img src="/memeories.png" alt="Memeories" />
                            <b>Memeories</b><br />
                            WIP<br />
                            Drag-and-drop images for cloud storage, then click on the image to get a direct link.
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
