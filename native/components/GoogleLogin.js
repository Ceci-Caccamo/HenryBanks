import React from "react";

//login con google

import { GoogleSignin, GoogleSigninButton } from "react-native-login-google";

function GoogleLogin() {

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId: '34b836548f77987746f6e3b8d75379b1b219bce7', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: 'http://localhost:19006/', // specifies a hosted domain restriction
        loginHint: 'henrybank@gmail.com', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
        accountName: 'Henry Bank', // [Android] specifies an account name on the device that should be used
        //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      })




  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={this._signIn}
      disabled={this.state.isSigninInProgress}
    />
  );
}

export default GoogleLogin;
