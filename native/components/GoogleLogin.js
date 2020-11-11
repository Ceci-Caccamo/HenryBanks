import React, { Component } from "react";
import {View} from 'react-native'
//login con google

import { GoogleSignin, GoogleSigninButton } from "react-native-login-google";

GoogleSignin.configure({
  webClientId:
    "761056814689-hqmtku14j41b5349dj3at5jke8hq4mrf.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGoogleInfo: {},
      loader: false,
    };
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loader: true,
      });
    } catch (error) {
        
      console.log(error.message);
    }
  };

  render() {
    return (
        <View>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.signIn}
        disabled={this.state.isSigninInProgress}
      />
      </View>
    );
  }
}
export default GoogleLogin;

/* function GoogleLogin() {


      
  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={this.signIn}
      disabled={this.state.isSigninInProgress}
    />
  );
}

export default GoogleLogin;
 */
