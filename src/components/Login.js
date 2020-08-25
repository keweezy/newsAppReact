import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  state = {
    isLoggedIn: false,
  };

  getUserInfo = () => {
    return {
      email: document.getElementById('defaultLoginFormEmail').value,
      password: document.getElementById('defaultLoginFormPassword').value,
    };
  };

  login = (event) => {
    event.preventDefault();
    let flag = false;
    console.log(flag);
    let loginInfo = this.getUserInfo();
    let userData = [];
    userData = JSON.parse(localStorage.getItem('users'));
    if (localStorage.getItem('users') === null) {
      alert('User Not Found');
      return;
    }
    userData.forEach((user) => {
      if (loginInfo.email === user.email) {
        flag = true;
        this.setState({ isLoggedIn: true });
        alert('User logged in');
      }
      if (loginInfo.email !== user.email) {
        flag = false;
        alert('User not Found');
      }
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-4 col-md-auto">
          <form
            className="text-center border border-light p-5 m-10"
            onSubmit={this.login}
          >
            <p className="h4 mb-4">Sign in</p>

            <input
              type="email"
              id="defaultLoginFormEmail"
              className="form-control mb-4"
              placeholder="E-mail"
              required
            />

            <input
              type="password"
              id="defaultLoginFormPassword"
              className="form-control mb-4"
              placeholder="Password"
              required
            />

            <div className="d-flex justify-content-around">
              <div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="defaultLoginFormRemember"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="defaultLoginFormRemember"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div>
                <a href="/">Forgot password?</a>
              </div>
            </div>

            <button className="btn btn-info btn-block my-4" type="submit">
              Sign in
            </button>

            <p>
              Not a member?
              <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
