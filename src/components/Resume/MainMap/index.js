import React from 'react';
import AboutMe from '../AboutMe';

const AboutMeMap = (props) => {
    const aboutmemaptotal = props.aboutme
    console.log('all AboutMe', aboutmemaptotal);
    const aboutmemaplist = aboutmemaptotal.map((aboutme) => {
        console.log('one AboutMe', aboutme)
        return <AboutMe aboutme = {aboutme.fields} />
    })
    return (
        <ul className="AboutMe-list">
            {aboutmemaplist}
        </ul>
    )
}

export default AboutMeMap;