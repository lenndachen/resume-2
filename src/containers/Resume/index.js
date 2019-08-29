import React from 'react';
import Experiences from '../../components/Resume/Experiences';
import EducationMap from '../../components/Resume/EducationMap';
import Skills from '../../components/Resume/Skillsformat';
import Mains from '../../components/Resume/MainMap';
import SelfGrowth from '../components/Resume/Self-Growths';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      main: [],
      skills: [],
      experience: [],
      education: [],
      achievements: [],
      extracurriculars: [],
      growth: []
    };
  }

  componentDidMount() {
    // this.getResume();
    this.getGrowth();
    this.getExtracurriculars();
    this.getAchievements();
    this.getEducation();
    this.getExperience();
    this.getSkills();
    this.getMain();
  }

  getMain() {
    const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/AboutMe?maxRecords=3&view=Grid%20view" 
    fetch( 
      url,
      {
        headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
      }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log('Mains', responseData);
      const main = responseData.records;
      this.setState({ main }, () => {

      });
  });
 }
 getGrowth() {
  const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Growth?maxRecords=3&view=Grid%20view" 
  fetch( 
    url,
    {
      headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
    }
  )
  .then(response => response.json())
  .then(responseData => {
    console.log('Growths', responseData);
    const growth = responseData.records;
    this.setState({ growth }, () => {

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
   getExperience() {
     const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Experience?maxRecords=30&view=Grid%20view" 
     fetch( 
       url,
       {
         headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
       }
     )
  
          .then(response => response.json())
          .then(responseData => {
          console.log('My jobs', responseData);
          const experience = responseData.records;
          this.setState({ experience }, () => {

     });
  
  });
    
  }
   getSkills() {
     const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Skill?maxRecords=15&view=Grid%20view" 
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
      <div className="container"> 
        <li className="container-main"><Mains main={this.state.main} /></li>
        <li className="container-growth"><Self-Growth growth={this.state.growth} /></li>
      </div>
    )
  }
}


export default Resume;
