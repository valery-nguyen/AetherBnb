import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUserBookings, deleteBooking, fetchSpotBookings } from '../../actions/bookings_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.user.id,
  bookings: Object.values(state.entities.bookings)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBookings: (user_id) => dispatch(fetchUserBookings(user_id)),
    deleteBooking: (id) => dispatch(deleteBooking(id)),
    fetchSpotBookings: (spot_id) => dispatch(fetchSpotBookings(spot_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);