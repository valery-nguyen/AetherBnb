
import { connect } from 'react-redux';
import FormGuestCount from './form_guest_count';
import { receiveGuestCount } from './../../actions/search_actions';

const mapStateToProps = state => {

  return ({
  guestCount: state.ui.activeSearch.guestCount});

  };

const mapDispatchToProps = dispatch => ({
  receiveGuestCount: (guestCount) => dispatch(receiveGuestCount(guestCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormGuestCount);


