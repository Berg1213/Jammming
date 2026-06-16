//import '../css/search-results.css';
import TrackCard from './TrackCard.jsx';

function SearchResults({results}) {
 if (!results || !Array.isArray(results)) return <p>Loading...</p>

  return (
    <div className="search-results">
      {results.map((result, index) => (
        <TrackCard key={index} trackName={result.name} artistNames={[result.artistName]} />
      ))}
    </div>
  )
}

export default SearchResults