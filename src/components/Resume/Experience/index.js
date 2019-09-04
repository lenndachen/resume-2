import React from 'react';

const Experience = (props) => ( 
    <div className="experience-component">
        <li className="experience-title">{props.experience.jobTitle}</li>
        <li className="experience-company">{props.experience.jobCompany}</li>
        <li className="experience-years">{props.experience.jobYears}</li>
        <li className="experience-description">{props.experience.description}</li>
    </div>
)

export default Experience;