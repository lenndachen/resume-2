import React from 'react'
import CalculatorMap from '../../components/Calculator/CalculatorMap'; 

class Calculator extends React.Component{
    render(){
        return (
            <div className='calculator-container'>
                <CalculatorMap />
            </div>
        )
    }
}

export default Calculator;