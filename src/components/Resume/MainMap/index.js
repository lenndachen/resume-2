import React from 'react';
import Main from '../Main';

const Mains = (props) => {
    const mainTotal = props.main
    const mainlist = mainTotal.map((main) => {
        return <Main main = {main.fields} />
    })
    return (
        <ul className="main-list">
            {mainlist}
        </ul>
    )
}

export default Mains;