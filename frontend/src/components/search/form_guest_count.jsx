import React from 'react';
import { stat } from 'fs';

class FormGuestCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adults: 0,
      children: 0,
      infants: 0,
      
    };
    // add adults, children, infants to the state, perhaps
  }

  incrementValue(stateKey) {
    let value = this.state[stateKey] + 1;
    console.log(stateKey);
    // ADULTS CURRENTLY CAPPED AT 5.  FIX!
    switch (stateKey) {
      case "adults":
        if (value > 16) value = 16;
      case "children":
        if (value > 5) value = 5;
      case "infants":
        if (value > 5) value = 5;
      default: 
        console.log("default");
    }
    this.setState({
      [stateKey]: value 
    });
  }

  decrementValue(stateKey) {
    let value = this.state[stateKey] - 1;
    if (value < 0) {
      value = 0;
    }
    this.setState({
      [stateKey]: value 
    });
  }

  render() {
    return (
      <div>
        <form>
          
          <button onClick={() => this.decrementValue("adults")}>-</button>
          <h5>{this.state.adults}+</h5>
          <button onClick={() => this.incrementValue("adults")}>+</button> 
          <br/>
          <button onClick={() => this.decrementValue("children")}>-</button>
          <h5>{this.state.children}+</h5>
          <button onClick={() => this.incrementValue("children")}>+</button> 
          <br/>
          <button onClick={() => this.decrementValue("infants")}>-</button>
          <h5>{this.state.infants}+</h5>
          <button onClick={() => this.incrementValue("infants")}>+</button> 

        </form>
      </div>
    )
  }
}

export default FormGuestCount;


// input of type integer
// plus button, onClick=.... 
// finds the input by id (document.getelementbyid)
// set the value = the state value for that field