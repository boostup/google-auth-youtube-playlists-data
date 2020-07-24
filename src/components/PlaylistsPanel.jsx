import React from "react";
import { useGoogleAuth } from "../providers/GoogleLoginProvider";

function PlaylistsPanel() {
  const { isSignedIn } = useGoogleAuth();

  return (
    <div>
      <h1>Playlists Panel</h1>
      isSignedIn : {JSON.stringify(isSignedIn)}
    </div>
  );
}

export default PlaylistsPanel;
