import React from 'react';

class contact extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email: "",
            name: "",
            array: ["name"]

        }
    }
    handleChange =(e) => {
        console.log("Fire", e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }   

    onSubmit = () => {
        let newArray = this.state.array
        console.log(newArray);
        newArray.push(this.state.name);
        console.log(newArray);
        this.setState({array:newArray})
    }

        render() {
            return(
                <div>
                 Contact Page <br />
                <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                <button onClick={this.onSubmit}> Add </button>
                <div> {this.state.array} </div>
                {/* <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"/> */}
                </div>
            )
        }
}


export default contact;