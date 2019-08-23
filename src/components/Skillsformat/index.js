import React from 'react';


const Skills = (props) => { 
    console.log('skill compo', typeof props.skills)
    const skills = props.skills
    const skillList = skills.map((skill) => {
        console.log(skill.fields.skill);
        return <li className="skills">{skill.fields.skill}</li>
    })
    return (
        <ul className= "skills-whole"> 
           {skillList}
        </ul>
    )
}


export default Skills;