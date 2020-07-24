import React from "react";
import GoogleData from "./components/GoogleData";
import { useGoogleLogin } from "react-use-googlelogin";
import { GoogleLoginProvider } from "./components/GoogleLoginProvider";

function App() {
  return (
    <>
      {/* <GoogleLoginProvider> */}
      <div>
        <GoogleData />
      </div>
      {/* </GoogleLoginProvider> */}
    </>
  );
}

export default App;
