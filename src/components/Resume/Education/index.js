import React from 'react';


const Education = (props) => (
    <div className="education-component">
        <div className="education-degree">{props.education.degree}</div>
        <div className="education-degree-type">{props.education.degreeType}</div>
        <div className="education-degree-completion">{props.education.degreeCompletion}</div>
    </div>
)


export default Education;