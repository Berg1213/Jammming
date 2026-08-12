import '../css/search-bar.css';
import { useState, useEffect } from "react";

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    if (searchTerm){
      onSearch(searchTerm)
    }
  }, [searchTerm])
  
  return (
    <div className="search-bar-container">
      <span className="coin-slot">5¢</span>
      <input 
        type="text" 
        placeholder="Search for music" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}> 
      </input>
    </div>  
  )
}

export default SearchBar
