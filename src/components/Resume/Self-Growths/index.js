import React from 'react';
import Selfgrowth from '../Self-Growth';

const SelfGrowth = (props) => {
    const growthTotal = props.extracurricular
    const growthList = growthTotal.map((growth) => {
        return <Selfgrowth growth={growth.fields} />
    })
    
    return (
        <ul className="growth-list">
            {growthList}
        </ul>
    )
}

export default SelfGrowth;