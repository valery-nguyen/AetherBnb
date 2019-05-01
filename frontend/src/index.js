import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
// import 'rheostat/initialize';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from 'axios';
// import 'react-dates/initialize';

import 'rheostat/css/rheostat.css';
import 'react-dates/lib/css/_datepicker.css';
import './components/spots/spots.css';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import cssInterface from 'react-with-styles-interface-css';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';

import { fetchSpots } from './actions/spots_actions';

ThemedStyleSheet.registerInterface(cssInterface);
ThemedStyleSheet.registerTheme({
  ...RheostatDefaultTheme,
  ...ReactDatesDefaultTheme,
});


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  // remove the commands below after development
  window.axios = axios;
  window.fetchSpots = fetchSpots;
  window.dispatch = store.dispatch;
});