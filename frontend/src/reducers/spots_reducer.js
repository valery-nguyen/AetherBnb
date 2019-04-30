import { RECEIVE_SPOTS } from '../actions/spots_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return merge({}, state, action.spots.data);
    default:
      return state;
  }
};

export default SpotsReducer;