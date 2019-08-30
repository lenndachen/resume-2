import React from 'react';
import Extracurricular from '../Extracurricular';

const extracurricular = (props) => {
    const extracurricularTotal = props.extracurricular
    const extracurricularList = extracurricularTotal.map((extracurricular) => {
        return <Extracurricular extracurricular={extracurricular.fields} />
    })
    
    return (
        <ul className="achievement-list">
            {extracurricularList}
        </ul>
    )
}

export default extracurricular;