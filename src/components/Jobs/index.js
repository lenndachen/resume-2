import React from 'react';
import Job from '../Job';

const Jobs = (props) => {
    console.log(props);
    const jobs = props.jobList
    console.log('jobs jobs',jobs);
    const jobLiList = jobs.map((job) => {
        console.log(job.fields)
        return <Job job={job.fields} />
    })
    return (
        <ul className="jobs-list">
             {jobLiList}   
        </ul>
    )
}

export default Jobs