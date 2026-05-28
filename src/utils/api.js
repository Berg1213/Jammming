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

  export {search}