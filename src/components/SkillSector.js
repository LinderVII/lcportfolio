import React, { Component } from 'react';

class SkillSector extends Component {
    render() {
        return (
            <div className="skillSector">
                <h4>{this.props.name}:</h4>
                {
                //takes the skills, which is a 2d array, and creates individual elements for each
                    this.props.skills.map(function (value, key) {
                        return (
                            <div key={key}>
                                <img src={value[1]} alt={value[0]} />
                                {value[0]}
                            </div>
                        );
                })}
            </div>
        );
    }
}

export default SkillSector;

