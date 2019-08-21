import React from 'react';
import { userInfo } from 'os';

const Skillsformatting = (props) => {
    console.log('skills', props);
    return(
        <li className= "skills"> 
            <div className="skills">{props.me1.skills}</div>
        </li>
    )
}

export default Skillsformatting;