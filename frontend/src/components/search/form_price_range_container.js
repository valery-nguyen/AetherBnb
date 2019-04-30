
import { connect } from 'react-redux';
import FormPriceRange from './form_price_range';
import { receivePriceRange } from './../../actions/search_actions';

const mapStateToProps = state => ({
  activeSearch: state.ui.activeSearch
});

const mapDispatchToProps = dispatch => ({
  receivePriceRange: (priceRange) => dispatch(receivePriceRange(priceRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPriceRange);