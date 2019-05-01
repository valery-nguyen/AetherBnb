// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

// class ReservationForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.state;
//   }

//   // componentDidMount() {
//   //   if (!this.props.spot) {
//   //     this.props.fetchSpot(this.props.spot_id);
//   //   }
//   // }

//   render() {
//     if (!this.props.spot) return (<div></div>)

//     return (
//       <div>
//         <div className="reserve-main">
//           <div id="reserve-price">
            
//           </div>
//           <form onSubmit={handleSubmit} id="reserve-form">

//             <input type="date" />
//             {/* <DateRangePicker
//               startDate={this.state.startDate} // momentPropTypes.momentObj or null,
//               startDateId="start-date-field" // PropTypes.string.isRequired,
//               endDate={this.state.endDate} // momentPropTypes.momentObj or null,
//               endDateId="end-date-field" // PropTypes.string.isRequired,
//               onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
//               focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
//               onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
//             /> */}
//             <input className="reserve-guests" />
//             <input type="submit" value="Request to Book" />
//           </form>
//         </div>
//     );
//   }
// }

// export default withRouter(SpotShow);