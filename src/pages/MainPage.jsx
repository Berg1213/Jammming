import '../css/main-page.css';
import {search, getUserID, createPlaylist, addTracksToPlaylist, getTopSongs} from '../utils/api.js';
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import SearchResults from "../components/SearchResults.jsx";
import CurrentPlaylist from "../components/CurrentPlaylist.jsx";

function MainPage ({accessToken}) {
  
  const [hasSearched, setHasSearched] = useState(false)
  const [searchResults, setSearchResults] = useState(null)
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [playlistName, setPlaylistName] = useState('')
  const [topSongs, setTopSongs] = useState(null)
  


  const handleSearch = (searchTerm) => {
    //console.log("token in handleSearch:", accessToken)
    search(searchTerm, accessToken)
      .then(results => {
        console.log("raw tracks:", results.tracks.items);
        setSearchResults(results.tracks.items);
      });
    setHasSearched(true)
  }

  const handleClickAddTrack = (index) => {
    console.log("index of track to add:", index);
    setPlaylistTracks(prevTracks => {
      const trackToAdd = hasSearched ? searchResults[index] : topSongs[index];
      return [...prevTracks, trackToAdd];
    });
  };

  const handleClickRemoveTrack = (index) => {
    setPlaylistTracks(prevTracks => {
      const updatedTracks = [...prevTracks];
      updatedTracks.splice(index, 1);
      return updatedTracks;
    });
  }

  const handlePlaylistNameChange = (e) => {
    setPlaylistName(e.target.value);
  }

  const generateRandomSample = (content, selection) => {
    const shuffled = [...content]
    for (let i = 0; i < selection; i++) {
      const randomIndex = Math.floor(Math.random() * (shuffled.length - i));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]
    }
    return shuffled.slice(0, selection)
  }
  
  useEffect(() => {
    setTopSongs(generateRandomSample(getTopSongs(), 10));
  }, [])
      
  return (
    <div className="main-container">
      <SearchBar onSearch={handleSearch} />
      <div className="content-columns-container">
        <SearchResults results={hasSearched ? searchResults : topSongs} handleAddTrack={handleClickAddTrack} />
        <CurrentPlaylist playlistName={playlistName} playlistTracks={playlistTracks} handlePlaylistNameChange={handlePlaylistNameChange} handleRemoveTrack={handleClickRemoveTrack} />
      </div>
    </div>
  );
};

export default MainPage;