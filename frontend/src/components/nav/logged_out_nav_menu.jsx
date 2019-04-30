import React from 'react';
import { Link } from 'react-router-dom';

class LoggedOutNavMenu extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div>
        <Link to={'/signup'}> <button>Signup</button> </Link>
        <Link to={'/login'}> <button>Login</button> </Link>
      </div>

    );
  }
}

export default LoggedOutNavMenu;