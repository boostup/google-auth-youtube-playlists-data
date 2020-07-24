// Tutorial https://anthonyjgrove.github.io/react-google-login/?path=/info/google-login-button--default-button
import axios from "axios";
import React from "react";
import { GoogleLogin } from "react-google-login";

let loggedIn = false;
let token = "";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const SCOPE = "https://www.googleapis.com/auth/youtube.force-ssl";

const fetchData = async () => {
  return youtube.get("playlists", {
    params: {
      part: "snippet, contentDetails",
      maxResults: 25,
      mine: true,
      key: "AIzaSyCf_JBCgYoPAl2TtTo-gLZ6dyzfhVJ0dno",
      access_token: token,
    },
  });
};

const rootElement = document.getElementById("root");

const responseGoogleStatus = (responseType) => {
  return (response) => {
    console.log(responseType, response);
    if (responseType == "Success") {
      loggedIn = true;
      token = response.accessToken;
    }
  };
};

const retrieveYTData = async () => {
  console.log("Will retrieve data ?", loggedIn, token);
  if (loggedIn === true) {
    const resp = await fetchData();
    console.log(resp);
  }
};

function GoogleData() {
  return (
    <div>
      <GoogleLogin
        clientId="84629250496-7b7tvvljlfd868bkfu0g59fff52qtff2.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogleStatus("Success")}
        onFailure={responseGoogleStatus("Failed")}
        cookiePolicy={"single_host_origin"}
        scope={SCOPE}
      />
      <div>
        <br />
        <button className="btn" onClick={retrieveYTData}>
          Retrieve playlist data <span className="badge badge-primary"></span>
        </button>
      </div>
    </div>
  );
}

export default GoogleData;
