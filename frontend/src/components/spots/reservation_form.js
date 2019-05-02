import React from 'react';
import { withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      guest_count: "",
      spot_id: this.props.spot._id,
      user_id: "5cc726fc047c7a35927cd696"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate() {
   
  }
  // componentDidMount() {
  //   if (!this.props.spot) {
  //     this.props.fetchSpot(this.props.spot_id);
  //   }
  // }

  update(field) {
    
    return e => this.setState({ [field]: e.currentTarget.value });
  } 

  handleSubmit(e) {
    e.preventDefault();
    let bookingInfo = this.state;
    this.props.createBooking(bookingInfo);
  }

  render() {
    if (!this.props.spot) return (<div></div>)

    return (
      <div>
        
        <div className="reserve-main">

          <div id="reserve-inner-container">
          <div id="reserve-price">${this.props.spot.price}<span className="sans12"> per night</span></div>
          <span className="divider"></span>
          <form id="reserve-form" onSubmit={this.handleSubmit}>
            <label>Dates
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="start-date-field" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="end-date-field" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.setState({ startDate, endDate })
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput =>
                this.setState({ focusedInput })
              } // PropTypes.func.isRequired,
            />
            </label>
            <label>Guests<br/>
            <input className="reserve-guests" onChange={this.update('guest_count')} type="text" placeholder="enter # of guests"/>
            </label>
            <input id="reservation-submit-button" type="submit" value="Book" />
          </form>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(ReservationForm);