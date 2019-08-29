import React from 'react';


const AboutMe = (props) => (
    <div className="main-component">
        <div>
        <h4 className="main-name">{props.aboutme.Name}</h4>
        </div>
        <br />
        <div className="main-initial-component">

        </div>
        <br />   
        <div>
        <a className="main-address">{props.aboutme.Address}</a>
        <a className="main-email">{props.aboutme.Email}</a>
        <a className="main-github" href="https://github.com/lenndachen" >{props.aboutme.Github}</a>
        <a className="main-linkedin" href="https://www.linkedin.com/in/linda-chen-6b713198/">{props.aboutme.LinkedIn}</a>
        </div>
    </div>
)

export default AboutMe;