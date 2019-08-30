import React from 'react';
import Growth from '../Growth';

const Growths = (props) => {
    const growthTotal = props.growth
    const growthList = growthTotal.map((growth) => {
        return <Growth growth={growth.fields} />
    })
    
    return (
        <ul className="growth-list">
            {growthList}
        </ul>
    )
}

export default Growths;