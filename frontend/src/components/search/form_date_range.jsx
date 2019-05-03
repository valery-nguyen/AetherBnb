import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './form_modal.css';


class FormDateRange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.activeSearch.startDate,
      endDate: this.props.activeSearch.endDate,
    };
  }

  toggleModal() {
    let modal = document.getElementById("dates-modal");
    let guestModal = document.getElementById("guests-modal");
    let priceModal = document.getElementById("price-range-modal");
    if (guestModal.classList.contains("show-modal")) {
      guestModal.classList.remove("show-modal");
    }
    if (priceModal.classList.contains("show-modal")) {
      priceModal.classList.remove("show-modal");
    }
    modal.classList.toggle("show-modal");
  }

  applyDateRange(e) {
    e.preventDefault();
    this.props.receiveDateRange(this.state);
    this.props.fetchSpots(this.props.activeSearch);
    this.toggleModal();
  }

  clearDateRange(e) {
    e.preventDefault();
  this.setState({
    startDate: null,
    endDate: null
  });
}

  render() {
    return (

      <div>
        <button className="modal-button" onClick={() => this.toggleModal()}>Dates</button>
        <div className="dates-modal" id="dates-modal" >
          <form className="">

            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="start-date-field" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="end-date-field" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />

            <br />
            <div className="modal-buttons" >
              <button className="date-range-picker-button" onClick={(e) => this.clearDateRange(e)}>Clear</button>
              <button className="date-range-picker-button" onClick={(e) => this.applyDateRange(e)}>Apply</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FormDateRange;