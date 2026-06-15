import '../css/main-page.css';
import {search, getUserId, createPlaylist, addTracksToPlaylist, getTopSongs} from '../utils/api.js';
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import CurrentPlaylist from "../components/CurrentPlaylist.jsx";

function MainPage () {
  
  const [hasSearched, setHasSearched] = useState(false)
  const [searchResults, setSearchResults] = useState(null)
  const [playlistTracks, setPlaylistTracks] = useState(null)
  const [playlistName, setPlaylistName] = useState('My Playlist')
  const [topSongs, setTopSongs] = useState(null)
  
  const handleSearch = (searchTerm) => {
    search(searchTerm)
        .then(results => setSearchResults(results))  
    setHasSearched(true)
  }

  const generateRandomSample = (content, selection) => {
    const shuffled = [...content]
    for (let i = 0; i < selection; i++) {
      const randomIndex = Math.floor(Math.random() * (shuffled.length - i))
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]
    }
    return shuffled.slice(0, selection)
  }
  
  useEffect(() => {
    getTopSongs().then(songs => setTopSongs(generateRandomSample(songs, 10)));
  }, [])
      
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={hasSearched ? searchResults : topSongs} />
    </>
  );
};

export default MainPage;