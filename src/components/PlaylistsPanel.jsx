import React, { useState, useEffect } from "react";
import { useGoogleAuth } from "../providers/GoogleLoginProvider";
import { fetchPlaylists } from "../api/youtube";

function PlaylistsPanel() {
  const [playlistList, setPlaylistList] = useState([]);
  const { isSignedIn, googleUser } = useGoogleAuth();

  const getPlaylistsFromAPI = async () => {
    console.log("Will retrieve data ?", isSignedIn);
    const resp = await fetchPlaylists({
      token: googleUser.tokenObj.access_token,
    });
    setPlaylistList(resp.data.items);
  };

  // onComponentDidMount Hooks equivalent
  useEffect(() => {
    getPlaylistsFromAPI();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Playlists Panel</h1>
      <div>
        <pre>{JSON.stringify(playlistList, null, 2)}</pre>
      </div>
    </div>
  );
}
export default PlaylistsPanel;
