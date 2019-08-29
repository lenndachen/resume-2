import React from 'react';
import Achievement from '../Acheivement';

const achievement = (props) => {
    const achievementTotal = props.achievement
    const achievementList = achievementTotal.map((achievement) => {
        return <Achievement achievement={achievement.fields} />
    })
    
    return (
        <ul className="achievement-list">
            {achievementList}
        </ul>
    )
}

export default achievement;