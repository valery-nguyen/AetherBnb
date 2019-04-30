import React from 'react';
import { Link } from 'react-router-dom';

class LoggedInNavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Link to={'/profile'}>Profile</Link>
        <button onClick={this.logoutUser}>Logout</button>
      </div>
    );
  }
}

export default LoggedInNavMenu;