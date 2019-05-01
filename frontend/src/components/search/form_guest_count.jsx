import React from 'react';
import './form_modal.css';


class FormGuestCount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adults: this.props.guestCount.adults,
      children: this.props.guestCount.children,
      infants: this.props.guestCount.infants,
    };
    this.applyGuestCount = this.applyGuestCount.bind(this);
    // add adults, children, infants to the state if we want their values to persist/show in modal on reload
  }

  incrementValue(stateKey) {
    let value = this.state[stateKey] + 1;
    // ADULTS CURRENTLY CAPPED AT 5.  FIX!
    // 04/30/2019 I think I see the problem, here: I bet if we put a debugger in children or infants it'll hit it, regardless of whether we're adjusting adults.
    // yep, just confirmed that.  But I don't know why :p  Okay, I figured it out.  The order matters: I put "adults" at the bottom and that solved it. 
    switch (stateKey) {
      case ("children"):
        if (value > 5) value = 5;
      case "infants":
        if (value > 5) value = 5;
      case "adults":  
        if (value > 16) value = 16;
    }
    this.setState({
      [stateKey]: value 
    });
    
    this.addAdults();
  }

  addAdults() {
    if ((this.state.children >= 0 || this.state.infants >= 0) && this.state.adults === 0) {
      this.setState({
        adults: 1
      });
    }
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

  toggleModal() {
    let modal = document.getElementById("guests-modal");
    modal.classList.toggle("show-modal");
  }

  clearGuestCount() {
    this.setState({
      adults: 0,
      children: 0,
      infants: 0,
    });
  }

  applyGuestCount() {
    let total = this.state.adults + this.state.children + this.state.infants;
    if (total == 0) this.state.adults = 1;
    this.props.receiveGuestCount(this.state);
  }

  render() {
    return (
      <div>
        <button className="modal-button" onClick={() => this.toggleModal()}>Guests</button>
        <div className="guests-modal" id="guests-modal" >
          <form >
            
            <div className="incrementer">
              <h5>Adults</h5>
              <div className="increment-buttons">
                <button className="increment-button" onClick={() => this.decrementValue("adults")}>-</button>
                <h5> {this.state.adults}+</h5>
                <button className="increment-button" onClick={() => this.incrementValue("adults")}>+</button> 
              </div>
            </div>

            <div className="incrementer">
              <h5> Children </h5>
              <div className="increment-buttons">
                <button className="increment-button" onClick={() => this.decrementValue("children")}>-</button>
                <h5>{this.state.children}+</h5>
                <button className="increment-button" onClick={() => this.incrementValue("children")}>+</button> 
              </div>
            </div>
            
      

            <div className="incrementer">
              <h5> Infants </h5>
              <div className="increment-buttons">
                <button className="increment-button" onClick={() => this.decrementValue("infants")}>-</button>
                <h5>{this.state.infants}+</h5>
                <button className="increment-button" onClick={() => this.incrementValue("infants")}>+</button> 
              </div>
            </div>

            <div className="modal-buttons">
              <button className="date-range-picker-button" onClick={() => this.clearGuestCount()}>Clear</button>
              <button className="date-range-picker-button" onClick={() => this.applyGuestCount()}>Apply</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormGuestCount;