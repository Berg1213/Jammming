const popularGenres = ['rock', 'pop', 'alternative', 'rap', 'hiphop', 'metal', 'edm', 'classical', 'blues', 'jazz'];

const search = async (query, accessToken) => {
  const q = popularGenres.includes(query) ? `genre:${query}` : query;
  console.log("search URL:", `https://api.spotify.com/v1/search?q=${q}&type=artist,track,album`);
  const response = await fetch(`https://api.spotify.com/v1/search?q=${q}&type=artist,track,album`, {
       headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  const data = await response.json();
  return data;
  }

const getUserID = async (accessToken) => {
  const response = await fetch(`https://api.spotify.com/v1/me`, {
       headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  const data = await response.json();
  return data;
  }

const createPlaylist = async (name, description, accessToken) => {
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

const addTracksToPlaylist = async (id, tracks, position, accessToken) => {
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
        { name: "Die with a Smile", artists: [{ name: "Lady Gaga and Bruno Mars" }] },
        { name: "Luther", artists: [{ name: "Kendrick Lamar and SZA" }] },
        { name: "A Bar Song (Tipsy)", artists: [{ name: "Shaboozey" }] },
        { name: "Lose Control", artists: [{ name: "Teddy Swims" }] },
        { name: "Birds of a Feather", artists: [{ name: "Billie Eilish" }] },
        { name: "Beautiful Things", artists: [{ name: "Benson Boone" }] },
        { name: "Ordinary", artists: [{ name: "Alex Warren" }] },
        { name: "APT.", artists: [{ name: "Rosé and Bruno Mars" }] },
        { name: "Not Like Us", artists: [{ name: "Kendrick Lamar" }] },
        { name: "Espresso", artists: [{ name: "Sabrina Carpenter" }] },
        { name: "That's So True", artists: [{ name: "Gracie Abrams" }] },
        { name: "I'm the Problem", artists: [{ name: "Morgan Wallen" }] },
        { name: "Pink Pony Club", artists: [{ name: "Chappell Roan" }] },
        { name: "Nokia", artists: [{ name: "Drake" }] },
        { name: "Anxiety", artists: [{ name: "Doechii" }] },
        { name: "Manchild", artists: [{ name: "Sabrina Carpenter" }] },
        { name: "What I Want", artists: [{ name: "Morgan Wallen featuring Tate McRae" }] },
        { name: "Golden", artists: [{ name: "Huntrix" }] },
        { name: "Daisies", artists: [{ name: "Justin Bieber" }] },
        { name: "Abracadabra", artists: [{ name: "Lady Gaga" }] },
        { name: "Cry for Me", artists: [{ name: "The Weeknd" }] },
        { name: "Evil J0rdan", artists: [{ name: "Playboi Carti" }] },
        { name: "Rather Lie", artists: [{ name: "Playboi Carti and The Weeknd" }] },
        { name: "The Giver", artists: [{ name: "Chappell Roan" }] },
        { name: "Just in Case", artists: [{ name: "Morgan Wallen" }] },
        { name: "4x4", artists: [{ name: "Travis Scott" }] },
        { name: "Gimme a Hug", artists: [{ name: "Drake" }] },
        { name: "Timeless", artists: [{ name: "The Weeknd and Playboi Carti" }] },
        { name: "Too Sweet", artists: [{ name: "Hozier" }] },
        { name: "Texas Hold 'Em", artists: [{ name: "Beyoncé" }] },
        { name: "We Can't Be Friends", artists: [{ name: "Ariana Grande" }] },
        { name: "Yes, And?", artists: [{ name: "Ariana Grande" }] },
        { name: "Like That", artists: [{ name: "Future, Metro Boomin and Kendrick Lamar" }] },
        { name: "Hiss", artists: [{ name: "Megan Thee Stallion" }] },
        { name: "Saturn", artists: [{ name: "SZA" }] },
        { name: "Taste", artists: [{ name: "Sabrina Carpenter" }] },
        { name: "Good Luck, Babe!", artists: [{ name: "Chappell Roan" }] },
        { name: "Stick Season", artists: [{ name: "Noah Kahan" }] },
        { name: "Water", artists: [{ name: "Tyla" }] },
        { name: "Greedy", artists: [{ name: "Tate McRae" }] },
        { name: "All the Stars", artists: [{ name: "Kendrick Lamar and SZA" }] },
        { name: "The Subway", artists: [{ name: "Chappell Roan" }] },
        { name: "Tears", artists: [{ name: "Sabrina Carpenter" }] },
        { name: "Love Me Not", artists: [{ name: "Ravyn Lenae" }] },
        { name: "Bed Chem", artists: [{ name: "Sabrina Carpenter" }] },
        { name: "DTMF", artists: [{ name: "Bad Bunny" }] },
        { name: "Messy", artists: [{ name: "Lola Young" }] },
        { name: "30 for 30", artists: [{ name: "SZA with Kendrick Lamar" }] },
        { name: "I Ain't Comin' Back", artists: [{ name: "Morgan Wallen and Post Malone" }] },
    ];
  return songs;
}

export {search, getUserID, createPlaylist, addTracksToPlaylist, getTopSongs};