import React from "react";
import LoginPanel from "./components/LoginPanel";
import PlaylistsPanel from "./components/PlaylistsPanel";
import { useGoogleAuth } from "./providers/GoogleLoginProvider";

const App = () => {
  const { isSignedIn } = useGoogleAuth();

  return (
    <>
      <div>
        <LoginPanel />
      </div>
      {isSignedIn ? (
        <div>
          <PlaylistsPanel />
        </div>
      ) : null}
    </>
  );
};

export default App;
