import { connect } from 'react-redux';
import HeaderSearchForm from './header_search_form';
import { fetchSpots } from './../../actions/spots_actions';

const mapStateToProps = state => ({
  activeSearch: state.ui.activeSearch
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: (options) => dispatch(fetchSpots(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm);