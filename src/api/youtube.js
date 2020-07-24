import axios from "axios";

const youtube = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_API_URL,
});

export const fetchPlaylists = async ({ token }) => {
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
