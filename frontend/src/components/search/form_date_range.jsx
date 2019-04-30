import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
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
    modal.classList.toggle("show-modal");
  }

  applyDateRange() {
    this.props.receiveDateRange(this.state);
  }

  clearDateRange() {
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
          <form >

            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="start-date-field" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="end-date-field" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />

            <br/>
            <button onClick={() => this.clearDateRange()}>Clear</button>
            <button onClick={() => this.applyDateRange()}>Apply</button>

          </form>
        </div>
      </div>
    )
  }
}

export default FormDateRange;

