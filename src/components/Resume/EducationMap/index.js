import React from 'react'
import Education from '../Education';

const EducationMap = (props) => {
    const educationTotal = props.education
    console.log('all education', educationTotal);
    const educationList = educationTotal.map((education) => {
        console.log('one education', education)
        return <Education education={education.fields} />
    })
    return (
        <ul className="education-list">
            {educationList}
        </ul>
    )
}

export default EducationMap;