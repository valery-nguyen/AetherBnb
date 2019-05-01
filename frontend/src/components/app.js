import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SpotsContainer from './spots/spots_container';
import SpotContainer from "./spots/spot_container";
// import ProfileContainer from './profile/profile_container';

const App = () => (
  <div>
    <NavBarContainer />
    <div className="main-window">
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/spots" component={SpotsContainer} />
      <Route path="/spot/:id" component={SpotContainer} />
      {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
    </Switch>
    </div>
  </div>
);

export default App;