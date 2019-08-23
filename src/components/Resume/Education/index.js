import React from 'react';


const Education = (props) => (
    <div className="education-component">
        <ul className="degree">{props.education.degree}</ul>
        <ul className="degreeType">{props.education.degreeType}</ul>
        <ul className="degreeCompletion">{props.education.degreeCompletion}</ul>
        <br />
    </div>
)

export default Education;