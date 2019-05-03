import { connect } from 'react-redux';
import { fetchSpots, fetchSpot } from '../../actions/spots_actions';
import Spots from './spots';

const mapStateToProps = state => ({
    spots: Object.values(state.entities.spots),
    active: state.ui.activeSearch.active,
    mapIsActive: state.ui.activeSearch.mapIsActive
});

const mapDispatchToProps = dispatch => ({
    fetchSpots: (data) => dispatch(fetchSpots(data)),
    fetchSpot: (id) => dispatch(fetchSpot(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Spots);