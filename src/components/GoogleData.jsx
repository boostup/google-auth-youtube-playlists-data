// Tutorial https://anthonyjgrove.github.io/react-google-login/?path=/info/google-login-button--default-button
import axios from "axios";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

function GoogleData() {
  let loggedIn = false;
  let token = "";
  const [playlistList, setPlaylistList] = useState([]);

  const youtube = axios.create({
    baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
  });

  const SCOPE = "https://www.googleapis.com/auth/youtube.force-ssl";

  const fetchData = async () => {
    return youtube.get("playlists", {
      params: {
        part: "snippet, contentDetails",
        maxResults: 25,
        mine: true,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        access_token: token,
      },
    });
  };

  const retrieveYTData = async () => {
    console.log("Will retrieve data ?", loggedIn);
    if (loggedIn === true) {
      const resp = await fetchData();
      setPlaylistList(resp.data.items);
    }
  };

  const responseGoogleStatus = (responseType) => {
    return (response) => {
      console.log(responseType, response);
      if (responseType == "Success") {
        loggedIn = true;
        token = response.accessToken;
      }
    };
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogleStatus("Success")}
        onFailure={responseGoogleStatus("Failed")}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        scope={SCOPE}
      />
      <div>
        <br />
        <button className="btn" onClick={retrieveYTData}>
          Retrieve playlist data <span className="badge badge-primary"></span>
        </button>
        <div>{JSON.stringify(playlistList)}</div>
      </div>
    </div>
  );
}

export default GoogleData;
