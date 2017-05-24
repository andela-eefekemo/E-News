/* global location localStorage window*/
import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
  /**
   * @function responseSuccess
   * @param {Object} googleUser - Response object
   * Saves user profile to localStorage
   * reloads the page
   */
  const responseSuccess = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    localStorage.setItem(
      'User',
      JSON.stringify({
        iD: profile.getId(),
        name: profile.getName(),
        imageURL: profile.getImageUrl(),
        email: profile.getEmail(),
      }),
    );
    location.reload();
  };
  const id = process.env.ID;
  /**
   * @function responseFailure
   * @param {Object} response -Response object
   * console logs the error
   */
  const responseFailure = (response) => {
    console.log(response);
  };
  return (
    <div className="slider fullscreen valign-wrapper">
      <ul className="slides">
        <li>
          <img src="public/img/home.jpg" alt="home" />
          <div className="caption center-align">
            <h3 className="light black-text text-lighten-3">E-News</h3>
            <h5 className="light black-text text-lighten-3">
              View Headlines as it happens
            </h5>
            <GoogleLogin
              clientId={id}
              tag="span"
              onSuccess={responseSuccess}
              onFailure={responseFailure}
              disabled="false"
              style={{ opacity: 0 }}
            >
              <span
                className="btn waves-effect waves red darken-4"
                name="action"
              >
                <i className="fa fa-google google" />
                Sign in with google
              </span>
            </GoogleLogin>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default Login;
