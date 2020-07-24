import React, { useEffect } from "react";
import GoogleData from "./components/GoogleData";
import LoginPanel from "./components/LoginPanel";
import PlaylistsPanel from "./components/PlaylistsPanel";

const App = () => {
  return (
    <>
      <div>{/* <GoogleData /> */}</div>
      <div>
        <LoginPanel />
      </div>
      <div>
        <PlaylistsPanel />
      </div>
    </>
  );
};

export default App;
