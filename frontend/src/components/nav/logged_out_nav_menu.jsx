import React from 'react';
import { Link } from 'react-router-dom';

class LoggedOutNavMenu extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div className="nav-menu-buttons">
        <Link to={'/signup'}>Signup</Link>
        <Link to={'/login'}>Login</Link>
      </div>

    );
  }
}

export default LoggedOutNavMenu;