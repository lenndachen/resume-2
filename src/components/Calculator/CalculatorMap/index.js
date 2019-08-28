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
          if (arithmetic === 'minus') {
            this.setState({
                screenDisplay: base - newNumber
            })
        }
        if (arithmetic === 'multiply') {
            this.setState({
                screenDisplay: base * newNumber
            })
        }
        if (arithmetic === 'divide') {
            this.setState({
                screenDisplay: base / newNumber
            })
        }
    }

    subNumbers() {
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber: baseNumber,
            screenDisplay: "",
            arithmetic:'minus'
        }, () => {
            console.log(this.state.baseNumber);
        })
    }

    mulNumbers() {
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber: baseNumber,
            screenDisplay: "",
            arithmetic:'multiply'
        }, () => {
            console.log(this.state.baseNumber);
        })
    }

    divNumbers(){
        const baseNumber = this.state.screenDisplay;
        this.setState({
            baseNumber: baseNumber,
            screenDisplay: "",
            arithmetic:'divide'
        }, () => {
            console.log(this.state.baseNumber);
        })
    }

    render() {
    const numberArray =[1,2,3,4,5,6,7,8,9,"",0];
    const numberLiList = numberArray.map ((num) => {

    return (
         <CalcNumber value={num} key={num}  handleCalcButtonClick={this.handleCalcButtonClick}/>
   
  )})

return (
    <div className="calculator">
        <div className="screen">{this.state.screenDisplay}</div>
        <div className="solve" onClick={() => this.solve()}>Solve</div>
        <div className="clearNumbers" onClick={() => this.clearDisplay()}>AC</div>
         <div className="number-list"> {numberLiList}</div>
        <div className="add" onClick={() => this.addNumbers()}>+</div>
        <div className="subtract" onClick={() => this.subNumbers()}>-</div>
        <div className="multiply" onClick={() => this.mulNumbers()}>*</div>
        <div className="divide" onClick={() => this.divNumbers()}>/</div>
    </div>
  )
}
}



export default CalculatorMap;