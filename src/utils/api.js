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

/* const getNewReleases = async () => {
  const accessToken = localStorage.getItem('access_token');
  const response = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=50`, {
       headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  const data = await response.json();
  return data;
  } */

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

const getTopSongs = () => {
  const songs = [
    { name: "Die with a Smile", artistName: "Lady Gaga and Bruno Mars" },
    { name: "Luther", artistName: "Kendrick Lamar and SZA" },
    { name: "A Bar Song (Tipsy)", artistName: "Shaboozey" },
    { name: "Lose Control", artistName: "Teddy Swims" },
    { name: "Birds of a Feather", artistName: "Billie Eilish" },
    { name: "Beautiful Things", artistName: "Benson Boone" },
    { name: "Ordinary", artistName: "Alex Warren" },
    { name: "APT.", artistName: "Rosé and Bruno Mars" },
    { name: "Not Like Us", artistName: "Kendrick Lamar" },
    { name: "Espresso", artistName: "Sabrina Carpenter" },
    { name: "That's So True", artistName: "Gracie Abrams" },
    { name: "I'm the Problem", artistName: "Morgan Wallen" },
    { name: "Pink Pony Club", artistName: "Chappell Roan" },
    { name: "Nokia", artistName: "Drake" },
    { name: "Anxiety", artistName: "Doechii" },
    { name: "Manchild", artistName: "Sabrina Carpenter" },
    { name: "What I Want", artistName: "Morgan Wallen featuring Tate McRae" },
    { name: "Golden", artistName: "Huntrix" },
    { name: "Daisies", artistName: "Justin Bieber" },
    { name: "Abracadabra", artistName: "Lady Gaga" },
    { name: "Cry for Me", artistName: "The Weeknd" },
    { name: "Evil J0rdan", artistName: "Playboi Carti" },
    { name: "Rather Lie", artistName: "Playboi Carti and The Weeknd" },
    { name: "The Giver", artistName: "Chappell Roan" },
    { name: "Just in Case", artistName: "Morgan Wallen" },
    { name: "4x4", artistName: "Travis Scott" },
    { name: "Gimme a Hug", artistName: "Drake" },
    { name: "Timeless", artistName: "The Weeknd and Playboi Carti" },
    { name: "Too Sweet", artistName: "Hozier" },
    { name: "Texas Hold 'Em", artistName: "Beyoncé" },
    { name: "We Can't Be Friends", artistName: "Ariana Grande" },
    { name: "Yes, And?", artistName: "Ariana Grande" },
    { name: "Like That", artistName: "Future, Metro Boomin and Kendrick Lamar" },
    { name: "Hiss", artistName: "Megan Thee Stallion" },
    { name: "Saturn", artistName: "SZA" },
    { name: "Taste", artistName: "Sabrina Carpenter" },
    { name: "Good Luck, Babe!", artistName: "Chappell Roan" },
    { name: "Stick Season", artistName: "Noah Kahan" },
    { name: "Water", artistName: "Tyla" },
    { name: "Greedy", artistName: "Tate McRae" },
    { name: "All the Stars", artistName: "Kendrick Lamar and SZA" },
    { name: "The Subway", artistName: "Chappell Roan" },
    { name: "Tears", artistName: "Sabrina Carpenter" },
    { name: "Love Me Not", artistName: "Ravyn Lenae" },
    { name: "Bed Chem", artistName: "Sabrina Carpenter" },
    { name: "DTMF", artistName: "Bad Bunny" },
    { name: "Nokia", artistName: "Drake" },
    { name: "Messy", artistName: "Lola Young" },
    { name: "30 for 30", artistName: "SZA with Kendrick Lamar" },
    { name: "I Ain't Comin' Back", artistName: "Morgan Wallen and Post Malone" },
  ];
  return songs;
}

export {search, getUserID, createPlaylist, addTracksToPlaylist, getTopSongs};