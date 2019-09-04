import React from 'react';
import Experiences from '../../components/Resume/Experiences';
import Educations from '../../components/Resume/Educations';
import Skills from '../../components/Resume/Skills';
import Mains from '../../components/Resume/MainMap';
import Growths from '../../components/Resume/Growths';
import Extracurricular from '../../components/Resume/Extracurricula';
import Achievements from '../../components/Resume/Achievements';


class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      main: [],
      skill: [],
      experience: [],
      education: [],
      achievement: [],
      extracurricular: [],
      growth: []
    };
  }

  componentDidMount() {
    // this.getResume();
    this.getGrowth();
    this.getExtracurricular();
    this.getAchievement();
    this.getEducation();
    this.getExperience();
    this.getSkill();
    this.getMain();
  }

  getMain() {
    const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Main?maxRecords=3&view=Grid%20view" 
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
      console.log('All Education', responseData);
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
          console.log('My Experience', responseData);
          const experience = responseData.records;
          this.setState({ experience }, () => {

     });
  
  });
    
  }
   getSkill() {
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
       const skill = responseData.records;
       this.setState({ skill }, () => {

       });
   });
 }

 getExtracurricular() {
  const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Extracurricular?maxRecords=15&view=Grid%20view" 
  fetch( 
   url,
  {
      headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
    }
  )

  .then(response => response.json())
  .then(responseData => {
    console.log('My skills', responseData);
    const extracurricular = responseData.records;
    this.setState({ extracurricular }, () => {

    });
});
}

getAchievement() {
  const url = "https://api.airtable.com/v0/appIxVtdy2R9iES5U/Achievement?maxRecords=15&view=Grid%20view" 
  fetch( 
   url,
  {
      headers : { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLE_KEY }
    }
  )

  .then(response => response.json())
  .then(responseData => {
    console.log('My skills', responseData);
    const achievement = responseData.records;
    this.setState({ achievement }, () => {

    });
});
}


  render() {
    return (
      <div className="container"> 
        <span className="container-main"><Mains main={this.state.main} /></span>
        <span className="container-growth"> <h1>Growths </h1><Growths growth={this.state.growth}/> </span>
        <span className="container-skills"> <h1>Skills </h1><Skills skill={this.state.skill} /> </span>
        <span className="container-experience"><h1>Experience</h1><Experiences experience={this.state.experience} /> </span>
        <span className="container-education"><h1>Education</h1><Educations education={this.state.education} /> </span>
        <span className="container-achievements"><h1>Achievements</h1><Achievements achievement={this.state.achievement} /> </span>
        <span className="container-extracurricular"><h1>Extracurriculars</h1><Extracurricular extracurricular={this.state.extracurricular} /> </span>
      </div>
    )
  }
}


export default Resume;
