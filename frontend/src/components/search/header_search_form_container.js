import { connect } from 'react-redux';
import HeaderSearchForm from './header_search_form';
import { fetchSpots } from './../../actions/spots_actions';
import { receiveSearchStatus } from './../../actions/search_actions';

const mapStateToProps = state => {
  return {
  activeSearch: state.ui.activeSearch
}};

const mapDispatchToProps = dispatch => ({
  fetchSpots: (options) => dispatch(fetchSpots(options)),
  receiveSearchStatus: (active) => dispatch(receiveSearchStatus(active))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm);