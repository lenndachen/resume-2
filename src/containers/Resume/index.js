import React from 'react';
import { Link } from 'react-router-dom';
import ResumeHeader from '../../components/ResumeHeader';
import Jobs from '../../components/Jobs';
import EducationMap from '../../components/EducationMap';
import Skills from '../../components/Skillsformat';


class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      skills: [],
      jobs: [],
      education: []
    };
  }

  componentDidMount() {
    // this.getResume();
    this.getJobs();
    this.getEducation();
    this.getSkills();
  }

  getEducation() {
    const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Education?maxRecords=3&view=Grid%20view" 
    fetch( 
      url,
      {
        headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
      }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log('Education', responseData);
      const education = responseData.records;
      this.setState({ education:education }, () => {

      });
  });
 }
   getJobs() {
     const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Job?maxRecords=3&view=Grid%20view" 
     fetch( 
       url,
       {
         headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
       }
     )
  
          .then(response => response.json())
          .then(responseData => {
          console.log('My jobs', responseData);
          const jobs = responseData.records;
          this.setState({ jobs }, () => {

     });
  
  });
    
  }
   getSkills() {
     const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Skill?maxRecords=3&view=Grid%20view" 
     fetch( 
      url,
     {
         headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
       }
     )

     .then(response => response.json())
     .then(responseData => {
       console.log('My skills', responseData);
       const skills = responseData.records;
       this.setState({ skills }, () => {

       });
   });
 }

  render() {
    return (
      <div className="view-container resume-page"> 
        <h4>Resume Page</h4>
        <ResumeHeader />
        <h2> Skills</h2>
        <Skills skills={this.state.skills}/>
        <h2>Education</h2>
        <EducationMap education={this.state.education}  />
        <h2>Jobs</h2>
        <Jobs jobList={this.state.jobs} />
      </div>
    )
  }
}


export default Resume;
