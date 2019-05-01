import { connect } from 'react-redux';
import SpotMap from './spot_map';
import { fetchSpots } from './../../actions/spots_actions';

const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots),
  searchParams: state.ui.activeSearch
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: (data) => dispatch(fetchSpots(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotMap);