import React from 'react';
import Experience from '../Experience';

const Experiences = (props) => {
    const ExperienceTotal = props.experience
    const ExperienceList = ExperienceTotal.map((experience) => {
        console.log(experience.fields)
        return <Experience experience={experience.fields}  />
    })

    return (
        <ul className="jobs-list">
             {ExperienceList}   
        </ul>
    )
}

export default Experiences;