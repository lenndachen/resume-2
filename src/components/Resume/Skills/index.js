import React from 'react'
import Skills0 from '../Skillsformat';

const Skills1= (props) => {
    const skills = props.skills;
    const skillsList = skills.map((skill) => {
         console.log(skill);
         return <Skills0 skill={skill.fields} />
     })
    
    return (
    <ul className="summaryComponent">
        {skillsList}
    </ul>
    )
 }

export default Skills1;

