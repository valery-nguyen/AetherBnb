import { connect } from 'react-redux';
import HeaderSearchForm from './header_search_form';

const mapStateToProps = state => ({
  activeSearch: state.ui.active_search
});

const mapDispatchToProps = dispatch => ({
  fetchSpots: (options) => dispatch(fetchSpots(options))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm);