const popularGenres = ['rock', 'pop', 'alternative', 'rap', 'hiphop', 'metal', 'edm', 'classical', 'blues', 'jazz'];

const search = async (query) => {
  const accessToken = localStorage.getItem('access_token');
  const q = popularGenres.includes(query) ? `genre:${query}` : query;
  const response = await fetch(`https://api.spotify.com/v1/search?q=${q}&type=artist,track,album`, {
       headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  const data = await response.json();
  return data;
  }

const getNewReleases = async () => {
  const accessToken = localStorage.getItem('access_token');
  const response = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=50`, {
       headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  const data = await response.json();
  return data;
  }

const getUserID = async () => {
  const accessToken = localStorage.getItem('access_token');
  const response = await fetch(`https://api.spotify.com/v1/me`, {
       headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  const data = await response.json();
  return data;
  }

const createPlaylist = async (name, description) => {
  const accessToken = localStorage.getItem('access_token');
  const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
       method: 'POST',
       headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({
        "name": name,
        "description": description,
        "public": false,
      }),
    });
  const data = await response.json();
  return data;
  }

const addTracksToPlaylist = async (id, tracks, position) => {
  const accessToken = localStorage.getItem('access_token');
  const response = await fetch(`https://api.spotify.com/v1/playlists/${id}/items`, {
      method: 'POST',
      headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      "position": position,
      "uris":tracks
    }),
  });
const data = await response.json();
return data;
}

export {search, getUserID, createPlaylist, addTracksToPlaylist, getNewReleases}