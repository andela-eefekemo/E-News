import React from 'react';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {

  render() {
    const responseSuccess = (googleUser) => {
      const profile = googleUser.getBasicProfile();
      localStorage.setItem('User', JSON.stringify({
        iD: profile.getId(),
        name: profile.getName(),
        imageURL: profile.getImageUrl(),
        email: profile.getEmail(),
      }));
      location.reload();
    };

    const responseFailure = (response) => {
      console.log(response);
    };
    return (
      <div className="slider fullscreen">

        <GoogleLogin
          clientId="168223437354-g10cfpqph7vkimb410tdm4kdofvf6028.apps.googleusercontent.com"
          tag="span"
          onSuccess={responseSuccess}
          onFailure={responseFailure}
          disabled="false"
          style={{ opacity: 1 }}
        >
          <span className="btn waves-effect waves-light" name="action">Login with Google
                <i className="material-icons right">send</i>
          </span>
        </GoogleLogin>

      </div>
    );
  }
}

export default Login;

