import React from 'react';
import { Link } from 'react-router-dom';
import ResumeHeader from '../../components/ResumeHeader';
import Jobs from '../../components/Jobs';

const me = {
    name:"Linda Chen",
    emailAddress:"Lindachen548@gmail.com",
    number:"919-589-4233",
    skills: ['javascript', 'html/css']
}

const jobList = [
    {
    jobTitle:"Job Title: CEO and Director",
    jobCompany:"Job: Self-Improvement",
    jobYears:"Years: 16 years"
    },
    {
    jobTitle:"Software Developer Intern",
    jobCompany:"Code the Dream",
    jobYears:"1 Month"
    }
]

function Resume() {
    return (
      <div className="App"> 
        <ResumeHeader user={me} />
        {/* <Skills skills={me.skills} /> */}
        <Jobs jobList={jobList} />
      </div>
    )
}

export default Resume;