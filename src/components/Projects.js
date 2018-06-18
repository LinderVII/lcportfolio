import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="projectsSectionWrapper">
                <h2>Projects</h2>
                <p>Public projects I am working on or have worked on. Click on a project for a <b>live demo</b>.</p>
                <div className="projectsWrapper">
                    <div className="project">
                        <a href="/epsilon">
                            <img src="/epsilon.png" alt="Epsilon C" />
                            <b>Epsilon C</b><br />
                            120~ downloads<br />
                            App, made using Cordova<br />
                            A school project for gathering a high school-student's entire day in one app.
                        </a>
                    </div>
                    <div className="project">
                        <a href="/memeories">
                            <img src="/memeories.png" alt="Memeories" />
                            <b>Memeories</b><br />
                            WIP<br />
                            Website, made using React<br />
                            Drag-and-drop images for cloud storage, then click on the image to get a direct link.
                        </a>
                    </div>
                </div>
                <div className="smallProjects">
                    <div className="smallProject">
                        <img src="/start.png" alt="Start" /><br />
                        <b>Start</b><br />
                        Website, made using PHP and JQuery<br /><br />
                        Highly-customizable general-purpose startpage with searchbar, custom links and notifications.
                    </div>
                    <div className="smallProject">
                        <img src="/forum.png" alt="Forum" /><br />
                        <b>Forum</b><br />
                        Website, made using PHP and JQuery<br /><br />
                        Small Forum made for a gaming community which was never used.
                    </div>
                    <div className="smallProject">
                        <img src="/training.png" alt="traning" /><br />
                        <b>Tr&auml;ning</b><br />
                        Website, made using JQuery<br />
                        App, made using Cordova<br /><br />
                        Platform for tracking training. Never released because a large market of similar apps already existed
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
