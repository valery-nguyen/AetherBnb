import { RECEIVE_DATE_RANGE, RECEIVE_PRICE_RANGE, RECEIVE_GUEST_COUNT, RECEIVE_SEARCH_STATUS } from './../actions/search_actions';
import { merge } from 'lodash';

const defaultState = { 
  active: false, 
  startDate: null,
  endDate: null,
  guestCount: {
    adults: 0,
    children: 0,
    infants: 0
  },
  priceRange: {
    minValue: 0,
    maxValue: 1000
  }
};

//this slice of state is not persisting!

const ActiveSearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DATE_RANGE:
      return merge({}, state, action.dateRange);
    case RECEIVE_PRICE_RANGE:
      return merge({}, state, action.priceRange);
    case RECEIVE_GUEST_COUNT:
      return merge({}, state, { guestCount: action.count });
    case RECEIVE_SEARCH_STATUS:
      return merge({}, state, { active: action.active });
    default:
      return state;
  }
};

export default ActiveSearchReducer;

