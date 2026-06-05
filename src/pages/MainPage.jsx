import '../css/main-page.css';
import {search, getUserId, createPlaylist, addTracksToPlaylist} from '../utils/api.js';
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import CurrentPlaylist from "../components/CurrentPlaylist.jsx";

function MainPage () {
  
  const [searchResults, setSearchResults] = useState(null)
  const [playlistTracks, setPlaylistTracks] = useState(null)
  const [playlistName, setPlaylistName] = useState('My Playlist')
  
  const handleSearch = (searchTerm) => {
    search(searchTerm)
        .then(results => setSearchResults(results))   
  }
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
    </>
  );
};

export default MainPage;
