import React from 'react';


const Main = (props) => (
    <div className="main-component">
        <div>
        <h4 className="main-name">{props.aboutme.Name}</h4>
        </div>
        <br />
        <div className="main-initial-component">

        </div>
        <br />   
        <div>
        <li className="main-address">{props.aboutme.Address}</li>
        <li className="main-email">{props.aboutme.Email}</li>
        <li className="main-github" href="https://github.com/lenndachen" >{props.aboutme.Github}</li>
        <li className="main-linkedin" href="https://www.linkedin.com/in/linda-chen-6b713198/">{props.aboutme.LinkedIn}</li>
        </div>
    </div>
)

export default Main;