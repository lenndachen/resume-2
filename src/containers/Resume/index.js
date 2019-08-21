import React from 'react';
import { Link } from 'react-router-dom';
import ResumeHeader from '../../components/ResumeHeader';
import Jobs from '../../components/Jobs';
import EducationMap from '../../components/EducationMap';
import Skills from '../../components/Skills';

const me1 = 
  {
    name:"Linda Chen",
    emailAddress:"Lindachen548@gmail.com",
    number:"919-589-4233",
    skills: ['javascript ','html/css ','python']
  }
  

const jobList = [
    {
    jobTitle:"Job Title: CEO and Director",
    jobCompany:"Job: Self-Improvement",
    jobYears:"Years: 16 years"
    },
    {
    jobTitle:"Job Title: Software Developer Intern",
    jobCompany:"Job: Code the Dream",
    jobYears:"Years: 1 Month"
    }
]

const education = [
  {
    degree: 'Associates Degree',
    degreeType: 'General Studies',
    degreeCompletion: 'Dec.2018',
  },
  {
    degree: 'Certification',
    degreeType: 'Responsive Web Design',
    degreeCompletion: 'Aug. 2019',
  }
];

const Resume = () => {
    return (
      <div className="view-container resume-page"> 
        <ResumeHeader user={me} />
        <h2> Skills</h2>
        <Skills user={me.skills} />
        <h2>Education</h2>
        <EducationMap education={education} />
        <h2>Jobs</h2>
        <Jobs jobList={jobList} />
      </div>
    )
}

export default Resume;