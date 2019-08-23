import React from 'react';


const AboutMe = (props) => (
    <li className="AboutMe-component">
        <h3 className="links" className="Aboutmenametitle">{props.aboutme.Name}</h3>
        <div className="links" >{props.aboutme.Title}</div>
        <div>
        <a className="links" >{props.aboutme.Phone}</a>
        <span> | </span>
        <a className="links" >{props.aboutme.Address}</a>
        </div>
        <div> 
        <a className="links" href="https://github.com/lenndachen" >{props.aboutme.Github}</a>
        <span>  |  </span>
        <a className="links" href="https://www.linkedin.com/in/linda-chen-6b713198/" >{props.aboutme.LinkedIn}</a>
        </div>
    </li>
)

export default AboutMe;