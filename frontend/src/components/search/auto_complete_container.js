import { connect } from 'react-redux';
import AutoComplete from './auto_complete';
import { fetchSpots } from './../../actions/spots_actions';
import { receiveSearchStatus, receiveLocation } from './../../actions/search_actions';

const mapStateToProps = state => ({
  activeSearch: state.ui.activeSearch
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: (options) => dispatch(fetchSpots(options)),
  receiveSearchStatus: (active) => dispatch(receiveSearchStatus(active)),
  receiveLocation: (location) => dispatch(receiveLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);