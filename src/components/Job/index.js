import React from 'react';
import { Link } from 'react-router-dom'

const Job = (props) => ( 
    <div className="jobComponent">
        <div className="job">{props.job.jobTitle}</div>
        <div className="job">{props.job.jobCompany}</div>
        <div className="job">{props.job.jobYears}</div>
    </div>
)

export default Job;