import React from 'react';
import { Link } from 'react-router-dom';

class LoggedOutNavMenu extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (

      <div className="nav-menu-buttons">
        <Link className="nav-menu-button" to={'/signup'}>Signup</Link>
        <Link className="nav-menu-button" to={'/login'}>Login</Link>
      </div>

    );
  }
}

export default LoggedOutNavMenu;