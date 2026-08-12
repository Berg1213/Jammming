import TrackCard from "./TrackCard";
//import '../css/current-playlist.css'

function CurrentPlaylist({playlistName, playlistTracks,handlePlaylistNameChange, handleRemoveTrack, handleSavePlaylist}) {
  return (
    <div className="current-playlist">
      <input type="text" placeholder="My Playlist" value={playlistName} onChange={handlePlaylistNameChange} />
      {playlistTracks.length === 0 ? (
        <p>Your playlist is empty.</p>
      ) : (
        playlistTracks.map((track, index) => (
        <TrackCard 
          key={index}
          trackName={track.name} 
          artistNames={[track.artists.map(artist => artist.name).join(', ')]} 
          actionButton={<button onClick={() => handleRemoveTrack(index)}>-</button>}
        />        ))
      )}
        <button 
          onClick={handleSavePlaylist} 
          disabled={playlistTracks.length < 3}
          className={playlistTracks.length < 3 ? 'save-btn inactive' : 'save-btn active'}
        >
          Save Playlist to Spotify
        </button>
    </div>
  )
}

export default CurrentPlaylist