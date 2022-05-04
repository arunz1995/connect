import React from 'react'
import side from './../Components/assets/sideway.png';
import './Search.css'

const Search = () => {
  return (
    <div className="search-container">
        <div className="search-top">
    <div className="search-section">
    <img src={side} alt="" />
    <div className="search-header">
        
    <input type="text" placeholder="Search people" id='find' />
    
    </div>
    </div>

    </div>
    </div>
  )
}

export default Search