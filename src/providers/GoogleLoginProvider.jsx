import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext(); // Not necessary, but recommended.

export function GoogleLoginProvider({ children }) {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID, // Your clientID from Google.
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {/* The rest of your app */}
      {children}
    </GoogleAuthContext.Provider>
  );
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
