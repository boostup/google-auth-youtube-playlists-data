import React, { useEffect } from "react";
import { useGoogleAuth } from "../providers/GoogleLoginProvider";

function LoginPanel() {
  const { signIn, signOut, isSignedIn, googleUser } = useGoogleAuth();

  const GoogleLoginButton = () => {
    return <button onClick={signIn}>Sign in with Google</button>;
  };

  const GoogleLogoutButton = () => {
    return <button onClick={signOut}>Sign out</button>;
  };

  const UserInfoPanel = () => {
    const { profileObj } = googleUser;

    return (
      <div className="LoginPanel_user-info-panel">
        <img
          src="https://lh4.googleusercontent.com/-f_ZGU8-b4xs/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckLMbSmlKvOyjUINPbbo9XrcJYlAg/s96-c/photo.jpg"
          alt="profile picture"
        />
        <div>Hello, {profileObj.givenName || profileObj.name}</div>
      </div>
    );
  };

  return (
    <>
      {isSignedIn ? null : <h1>Login Panel</h1>}
      {isSignedIn ? <UserInfoPanel /> : null}
      {isSignedIn ? <GoogleLogoutButton /> : <GoogleLoginButton />}
    </>
  );
}

export default LoginPanel;
