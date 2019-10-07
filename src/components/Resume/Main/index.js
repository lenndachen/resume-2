import React from 'react';
import Logo from '../../../assets/images/Capture.PNG';

const Main = (props) => (
    <div className="main-component">
        <div className="mainnamelogo">
            <div className="namediv">
                <h4 className="main-name">{props.main.Name}</h4>
            </div>
            <div className="logodiv">
                <img className="logo" src={Logo} alt="logo" />
            </div>
        </div> 
        <div className="infoonme">
            <li className="main-address">{props.main.Address}</li>
            <div className="notincludingaddress">
                <li className="main-email">{props.main.Email}</li>
                <li className="main-github" href="https://github.com/lenndachen" >{props.main.Github}</li>
                <li className="main-linkedin" href="https://www.linkedin.com/in/linda-chen-6b713198/">{props.main.LinkedIn}</li>
            </div>
        </div>
    </div>
)

export default Main;