import TrackCard from "./TrackCard";
//import '../css/current-playlist.css'

function CurrentPlaylist({playlistName, playlistTracks,handlePlaylistNameChange, handleRemoveTrack}) {
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
          artistNames={[track.artistName]} 
          actionButton={<button onClick={() => handleRemoveTrack(index)}>Remove</button>}
        />        ))
      )}
    </div>
  )
}

export default CurrentPlaylist