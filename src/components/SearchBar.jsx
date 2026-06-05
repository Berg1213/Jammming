import '../css/SearchBar.css';
import { useState, useEffect } from "react";

function SearchBar({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    onSearch(searchTerm)
  }, [searchTerm])
  
  return (
    <>
      <input 
        type="text" 
        placeholder="Search for music" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}> 
      </input>
    </>  
  )
}

export default SearchBar
