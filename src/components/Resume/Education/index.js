import React from 'react';


const Education = (props) => (
    <div className="education-component">
        <div className="degree">{props.education.degree} {props.education.degreeType}</div>
        <div className="degree">{props.education.degreeCompletion}</div>
        <hr />
    </div>
)

export default Education;