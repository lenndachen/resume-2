import React from 'react'
import Skillsformatting from '../../components/Skillsformat';

const Skills = (props) => {
    console.log('skills',props)
    const me = props.user;
    console.log(me);
    // const userList = me.map((user) => {
    //     console.log(user)
    //     return <Skillsformatting user={me} />
    // })
    
    return (
    <div className="summaryComponent">
        {/* <p> {userList}</p> */}
    </div>
    )
 }

export default Skills;

