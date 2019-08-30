import React from 'react';
import Skill from '../Skill';

const Skills = (props) => {
    const skillsTotal = props.skill
    const skillsList = skillsTotal.map((skill) => {
        console.log('one skill', skill)
        return <Skill skill={skill.fields} />
    })
    
    return (
        <ul className="skills-list">
            {skillsList}
        </ul>
    )
}


export default Skills;