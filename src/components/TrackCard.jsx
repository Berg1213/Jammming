function TrackCard({ trackName, artistNames, actionButton }) {
  return (
    <>
      <h3>{trackName}</h3>
      <p>{artistNames.join(', ')}</p>
      {actionButton}
    </>
  )
}

export default TrackCard