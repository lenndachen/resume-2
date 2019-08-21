import React from 'react'
import Skillsformatting from '../../components/Skillsformat';

const Skills = (props) => {
    console.log('skills',props)
    const me1 = props.user;
    console.log(me1);
    // const userList = me1.map((user) => {
    //     console.log(user)
    //     return <Skillsformatting user={me1} />
    // })
    
    return (
    <div className="summaryComponent">
        {/* <p> {userList}</p> */}
    </div>
    )
 }

export default Skills;

