import React from 'react';

const Experience = (props) => ( 
    <div className="jobComponent">
        <div className="job">{props.experience.jobTitle}</div>
        <div className="job">{props.experience.jobCompany}</div>
        <div className="job">{props.experience.jobYears}</div>
    </div>
)

export default Experience;