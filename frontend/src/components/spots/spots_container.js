import { connect } from 'react-redux';
import { fetchSpots, fetchSpot } from '../../actions/spots_actions';
import Spots from './spots';

const mapStateToProps = (state) => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: (data) => dispatch(fetchSpots(data)),
    fetchSpot: (id) => dispatch(fetchSpot(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Spots);