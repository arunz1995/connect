import React from 'react'
import side from './../Components/assets/sideway.png';
import close from './../Components/assets/close.png';
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
    <br/>
    
    <h1>Recent</h1>
    </div>
    <div className="search-body">
    <div className="search-body-one"></div>
    <div className="search-body-one-header"><h3> User 1 </h3></div> 
    <div className="search-body-one-body"><img src={close} alt="" /></div>
    <div className="search-body-one"></div>
    <div className="search-body-one-header"><h3> User 5 </h3></div> 
    <div className="search-body-one-body"><img src={close} alt="" /></div>
    <div className="search-body-one"></div>
    <div className="search-body-one-header"><h3> User 4 </h3></div> 
    <div className="search-body-one-body"><img src={close} alt="" /></div>
    <div className="search-body-one"></div>
    <div className="search-body-one-header"><h3> User 7 </h3></div> 
    <div className="search-body-one-body"><img src={close} alt="" /></div>
    </div>
    </div>
    </div>
  )
}

export default Search