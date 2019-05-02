import { connect } from "react-redux";
import { createBooking } from "../../actions/bookings_actions";
import ReservationForm from "./reservation_form";

const mapStateToProps = (state, ownProps) => {

  return {
      // user: state.session.user
     //spot: state.entities.spots[ownProps.match.params.id],
    // spot_id: ownProps.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBooking: bookingInfo => dispatch(createBooking(bookingInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
