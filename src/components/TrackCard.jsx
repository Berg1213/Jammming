//import '../css/trackCard.css'

function TrackCard({trackName, artistNames}) {

  return (
    <>
      <h3>{trackName}</h3>
      <p>{artistNames.join(', ')}</p>
      <button>+</button>
    </>
  )
}

export default TrackCard