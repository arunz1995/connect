import React from 'react'
import './Likes.css'
import red from './../Components/assets/red.svg'

const Likes = () => {
  return (
    <div className="like-container">
        <div className="like-section">
        <div className="like-header">
            <h1>Likes</h1>
            <img src={red} alt=""/>
            </div>
            <div className="like-body">
            <div className="like-body-one"></div>
            <div className="like-body-one-header"><h3> User 1 </h3></div>
            <div className="like-body-one"></div>
            <div className="like-body-one-header"><h3> User 9 </h3></div>
            <div className="like-body-one"></div>
            <div className="like-body-one-header"><h3> User 12 </h3></div>
            <div className="like-body-one"></div>
            <div className="like-body-one-header"><h3> User 5 </h3></div>
            <div className="like-body-one"></div>
            <div className="like-body-one-header"><h3> User 9 </h3></div>

            </div>
        </div>
    </div>
  )
}

export default Likes