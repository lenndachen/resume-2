import React from 'react';
import Jobs from '../../components/Resume/Jobs';
import EducationMap from '../../components/Resume/EducationMap';
import Skills from '../../components/Resume/Skillsformat';
import AboutMeMap from '../../components/Resume/AboutMeMap';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      skills: [],
      jobs: [],
      education: [],
      aboutme: []
    };
  }

  componentDidMount() {
    // this.getResume();
    this.getJobs();
    this.getEducation();
    this.getSkills();
    this.getAboutMe();
  }

  getAboutMe() {
    const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/AboutMe?maxRecords=3&view=Grid%20view" 
    fetch( 
      url,
      {
        headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
      }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log('AboutMe', responseData);
      const aboutme = responseData.records;
      this.setState({ aboutme }, () => {

      });
  });
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
      this.setState({ education }, () => {

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
        <a className="links"><AboutMeMap aboutme= {this.state.aboutme} /></a>
        <h5 className="h5-component"> Skills</h5>
        <Skills skills={this.state.skills}/>
        <h5 className="h5-component">Education</h5>
        <EducationMap education={this.state.education}  />
        <h5 className="h5-component">Jobs</h5>
        <Jobs jobList={this.state.jobs} />
      </div>
    )
  }
}


export default Resume;
