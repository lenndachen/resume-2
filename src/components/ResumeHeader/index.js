import React from 'react';
import { Link } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types';

const ResumeHeader = (props) => (
    <div className="view-container resume_header">
        <h3 className="name">{props.user.name}</h3>
        <div className="email-address">{props.user.emailAddresss}</div>
        <div className="phone-number">{props.user.number}</div>
    </div>
)

export default ResumeHeader;