import React from 'react';
import { Link } from 'react-router-dom';
import ResumeHeader from '../../components/ResumeHeader';
import Job from '../../components/Job';

const Resume = () => (
    <div className="view-container resume-page">
        <h3>Resume Page</h3>
        <ResumeHeader />
        <hr />
        <Job />
    </div>
)

export default Resume;