import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import HeaderSearchFormContainer from './../search/header_search_form_container';
import LoggedInNavMenuContainer from './logged_in_nav_menu_container';
import LoggedOutNavMenuContainer from './logged_out_nav_menu_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getMenuOptions = this.getMenuOptions.bind(this);
  }

  getMenuOptions() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-menu">
          <LoggedInNavMenuContainer/>
        </div>
      );
    } else {
      return (
        <div className="nav-menu">
          <LoggedOutNavMenuContainer/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-left">
          <h1>A</h1>
          <HeaderSearchFormContainer />
        </div>
        {this.getMenuOptions()}
      </div>
    );
  }
}

export default NavBar;