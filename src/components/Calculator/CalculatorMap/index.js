import React from 'react'
import CalcNumber from '../CalcNumber';

class CalculatorMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            screenDisplay: "",
            auxillaryNumber: "",
            baseNumber: ""
        }
    }

    handleCalcButtonClick =(x) => {
        let display = this.state.screenDisplay;
        display += x;
        this.setState({screenDisplay: display})
    }

    clearDisplay() {
        this.setState({
            screenDisplay: "",
            auxillaryNumber: "",
            baseNumber: ""
        })
    }

    addNumbers() {
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber: baseNumber,
            screenDisplay: "",
            arithmetic:'add'
        }, () => {
            console.log(this.state.baseNumber);
        })
    }

    solve() {
        const arithmetic = this.state.arithmetic
        const base = Number(this.state.baseNumber);
        const newNumber = Number(this.state.screenDisplay);
          if (arithmetic === 'add') {
              this.setState({
                  screenDisplay: base + newNumber
              })

          }
    }
    
    render() {
    const numberArray =[0,1,2,3,4,5,6,7,8,9];
    const numberLiList = numberArray.map ((num) => {

    return (
         <CalcNumber value={num} key={num}  handleCalcButtonClick={this.handleCalcButtonClick}/>
   
  )})

return (
    <div className="calculator">
        <div className="screenName">{this.state.screenDisplay}</div>
        <div className="solve" onClick={() => this.solve()}>Solve</div>
        <div className="clear" onClick={() => this.clearDisplay()}>AC</div>
        {numberLiList}
        <div className="add calc-button" onClick={() => this.addNumbers()}>+</div>
        <div className="subtract calc-button">-</div>
        <div className="multiply calc-button">*</div>
        <div className="divide calc-button">/</div>
        <div className="decimal calc-button">.</div>
    </div>
  )
}
}



export default CalculatorMap;