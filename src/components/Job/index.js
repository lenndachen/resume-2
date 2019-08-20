import React from 'react';
import { Link } from 'react-router-dom'

const Job = (props) => {
    console.log('job props', props)
    return (
    <div className="job-component">
        <div className="job">{props.job.jobTitle}</div>
        <div className="job">{props.job.jobCompany}</div>
        <div className="job">{props.job.jobYears}</div>
    </div>
)}

export default Job;