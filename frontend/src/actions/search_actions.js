export const RECEIVE_DATE_RANGE = "RECEIVE_DATE_RANGE";
export const RECEIVE_GUEST_COUNT = "RECEIVE_GUEST_COUNT";
export const RECEIVE_PRICE_RANGE = "RECEIVE_PRICE_RANGE";

export const receiveDateRange = (dateRange) => ({
  type: RECEIVE_DATE_RANGE,
  dateRange
});

export const receiveGuestCount = (count) => ({
  type: RECEIVE_GUEST_COUNT,
  count
});

export const receivePriceRange = (priceRange) => ({
  type: RECEIVE_PRICE_RANGE,
  priceRange
});

export const fetchSpots = (options) => dispatch => ({
  type: "FAKE"
});