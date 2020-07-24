// Tutorial https://anthonyjgrove.github.io/react-google-login/?path=/info/google-login-button--default-button
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GoogleLoginProvider } from "./providers/GoogleLoginProvider";

ReactDOM.render(
  <React.StrictMode>
    <GoogleLoginProvider>
      <App />
    </GoogleLoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
