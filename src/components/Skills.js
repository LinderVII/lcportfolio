import React, { Component } from 'react';
import SkillSector from './SkillSector';

class Skills extends Component {
    render() {
        return (
            <div className="skillsWrapper">
                <h2>Skills</h2>
                <p>
                    While picking up new libraries, languages or software is not an issue, these are the ones i use actively.
                </p>
                <div className="skillSectorWrapper">
                    <SkillSector name="Frontend" skills={
                        [
                            ["Javascript", "/js.png"],
                            ["ReactJS", "/react.png"]
                        ]} />
                    <SkillSector name="Backend" skills={
                        [
                            ["PHP", "/php.png"],
                            ["NodeJS", "/node.png"]
                        ]} />
                    <SkillSector name="App" skills={
                        [
                            ["Cordova", "/cordova.png"],
                            ["Java", "/java.png"]
                        ]} />
                    <SkillSector name="Database" skills={
                        [
                            ["MySQL", "/mysql.png"],
                            ["MongoDB", "/mongo.png"]
                        ]} />
                    <SkillSector name="For other projects" skills={
                        [
                            ["C#", "/csharp.png"],
                            ["Java", "/java.png"],
                            ["NodeJS", "/node.png"]
                        ]} /><br />
                    <SkillSector name="Image Editing" skills={
                        [
                            ["Photoshop", "/ps.png"]
                        ]} />
                </div>
            </div >
        );
    }
}

export default Skills;

