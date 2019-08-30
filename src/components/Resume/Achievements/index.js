import React from 'react';
import Achievement from '../Achievement';

const Achievements = (props) => {
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

export default Achievements;