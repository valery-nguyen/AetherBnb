import { connect } from 'react-redux';
import FormDateRange from './form_date_range';
import { receiveDateRange } from './../../actions/search_actions';

const mapStateToProps = state => {
  
  return ({
    activeSearch: state.ui.activeSearch
  });
  
};

const mapDispatchToProps = dispatch => ({
  receiveDateRange: (dateRange) => dispatch(receiveDateRange(dateRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDateRange);

