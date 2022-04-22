import React from 'react'
import './Profile.css';
import profile from './../Components/assets/profile.png';    

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-top">
            <div className="profile-image">
            <img src={profile} alt=""/>
            
                </div>
            <div className="profile-header">
            <h1>User Name</h1>
            <p>user_name@socius.com</p>
            </div>
            </div>
        <div className="profile-bottom">
        </div>
    </div>
  )
}

export default Profile