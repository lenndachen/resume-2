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

// const Resume = () => {
//     return (
//       <div className="view-container resume-page"> 
//         <ResumeHeader user={me} />
//         <h2> Skills</h2>
//         <Skills user={me.skills} />
//         <h2>Education</h2>
//         <EducationMap education={education} />
//         <h2>Jobs</h2>
//         <Jobs jobList={jobList} />
//       </div>
//     )
// }

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      resume:[]
    };
  }

  componentDidMount() {
    this.getResume();
  }

  getResume() {
    const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Resumework?maxRecords=3&view=Grid%20view" 
    fetch( 
      url,
      {
        headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
      }
    )

    .then(response => response.json())
    .then(responseData => {
      console.log('My data', responseData);
      const resume = responseData.records;
      this.setState({ resume });

      });
    
  }
  render() {
    return (
      <div className="view-container resume-page"> 
        <ResumeHeader user={me1} />
        <h2> Skills</h2>
        <Skills user={me1.skills} />
        <h2>Education</h2>
        <EducationMap education={education} />
        <h2>Jobs</h2>
        <Jobs jobList={this.state.resume} />
      </div>
    )
  }
}

export default Resume;

