import React from 'react';
import { userInfo } from 'os';

const Skillsformatting = (props) => {
    console.log('skills', props);
    return(
        <li className= "skills"> 
            <div className="skills">{props.me.skills}</div>
        </li>
    )
}

export default Skillsformatting;