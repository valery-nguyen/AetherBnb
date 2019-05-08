import React from 'react';
import { withRouter } from 'react-router-dom';
import { DateRangePicker } from 'react-dates';
var moment = require("moment");

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      startDate: null,
      endDate: null,
      guest_count: "",
      spot_id: this.props.spot._id,
      user_id: "",
      response_messages: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDayBlocked = this.isDayBlocked.bind(this);
  }
  // componentDidUpdate() {
   
  // }
  componentDidMount() {
    
    this.props.fetchSpotBookings(this.props.spot._id);
  }

  update(field) {
    
    return e => this.setState({ [field]: e.currentTarget.value });
  } 

  renderResponseMessages(messages) {
    if (messages.type === "success") {
      this.setState({
        response_messages: [
          <div key="success" id="messages-success">
            Successfully Booked!
          </div>
        ]
      });
    } else {
      this.setState({
        response_messages: [
          <div key="errors" id="messages-errors">
            {messages.body}
          </div>
        ]
      });
    }
    

  }
  isDayBlocked(day) {
      let calendarDay = day.calendar();
      let bookings = this.props.user.bookings;
      bookings = Object.values(bookings);
      let result = false;

      calendarDay = String(day.month() + 1).concat("/", day.date() + 1, "/", day.year())
      
      bookings.forEach( booking => {
      let startDay = moment(booking.start_date);
      let endDay = moment(booking.end_date);
      let CstartDay = String(startDay.month() + 1).concat("/", startDay.date() + 1, "/", startDay.year());
      let CendDay = String(endDay.month() + 1).concat("/", endDay.date() + 1, "/", endDay.year());

      if (calendarDay >= CstartDay && calendarDay <= CendDay) {
        result = true;
      } 
      });
      
      return result;
  }

  handleSubmit(e) {
    e.preventDefault();
    let temp = null;
    let bookingInfo = this.state;
    
      bookingInfo.user_id = this.props.user.user_id;
      debugger

      this.props.createBooking(bookingInfo).then(result => {
        temp = result;
        if(temp.type === "RECEIVE_BOOKINGS") {
          
          if(temp.bookings.status === 200) {
            this.renderResponseMessages({
              type: "success",
            })
          }
          
        } else if(temp.type === "RECEIVE_BOOKING_ERRORS") {
          
          this.renderResponseMessages({
            type: temp.type,
            body: Object.values(temp.err.response.data)
          });
        }
        
      });
      
  }

  render() {
    if (!this.props.spot) return (<div></div>)

    return (
      <div>
        <div className="reserve-main">
          <div id="reserve-inner-container">
            <div id="reserve-price">
              ${this.props.spot.price}
              <span className="sans12"> per night</span>
            </div>
            <span className="divider" />
            <form id="reserve-form" onSubmit={this.handleSubmit}>
              <label>
                Dates
                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  isDayBlocked={day => this.isDayBlocked(day)}
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
              <label>
                Guests
                <br />
                <input
                  className="reserve-guests"
                  onChange={this.update("guest_count")}
                  type="text"
                  placeholder="enter # of guests"
                />
              </label>
              <input
                id="reservation-submit-button"
                type="submit"
                value="Book"
              />
            </form>
          </div>
          
            {this.state.response_messages}
          
        </div>
      </div>
    );
  }
}

export default withRouter(ReservationForm);