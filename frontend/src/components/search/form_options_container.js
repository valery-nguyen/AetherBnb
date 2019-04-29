import { connect } from 'react-redux';
import FormOptions from './form_options';

const mapStateToProps = state => ({
  activeSearch: state.ui.active_search
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(FormOptions);