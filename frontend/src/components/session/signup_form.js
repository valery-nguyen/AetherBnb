import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        

        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <h1 className="session-modal-header">Sign up to continue</h1>
            <br/>
            <input type="text"
              className="modal-input-field"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="text"
              className="modal-input-field"
              value={this.state.handle}
              onChange={this.update('handle')}
              placeholder="Handle"
            />
            <br />
            <input type="password"
              className="modal-input-field"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <input type="password"
              className="modal-input-field"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <br />
            <input className="session-modal-submit-button" type="submit" value="Submit" />
            {this.renderErrors()}
            <div className="login-modal-lower-text">
              <h4>Already have an account?</h4><h4 onClick={() => this.props.handleClick("login-modal")} className="switch-between-modals">Log in</h4>
            </div>
          </div>
        </form>

        
      </div>
    );
  }
}

export default withRouter(SignupForm);