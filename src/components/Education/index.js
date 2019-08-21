import React from 'react';


const Education = (props) => (
    <li className="education-component">
        <span className="degree">{props.education.degree}</span>
        <span className="degreeType">{props.education.degreeType}</span>
        <span className="degreeCompletion">{props.education.degreeCompletion}</span>
        <br />
    </li>
)

export default Education;