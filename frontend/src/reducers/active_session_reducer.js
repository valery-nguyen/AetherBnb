import { RECEIVE_DATE_RANGE, RECEIVE_PRICE_RANGE, RECEIVE_GUEST_COUNT } from './../actions/search_actions';
import { merge } from 'lodash';

const defaultState = { 
  active: false, 
  start_date: null,
  end_date: null,
  guest_gount: 1,
  price_min: null,
  price_max: null
};

const ActiveSessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATE_RANGE:
      return merge({}, state, action.dateRange);
    case RECEIVE_PRICE_RANGE:
      return merge({}, state, action.priceRange);
    case RECEIVE_GUEST_COUNT:
      return merge({}, state, { guest_count: action.count });
    default:
      return state;
  }
};

export default ActiveSessionReducer;

