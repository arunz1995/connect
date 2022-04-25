import React from 'react'
import './Profile.css';
import profile from './../Components/assets/profile.png'; 
import imgOne from './../Components/assets/imgOne.svg';
import imgTwo from './../Components/assets/imgTwo.svg';
import imgThree from './../Components/assets/imgThree.svg';   
import home from './../Components/assets/homepage-icon.png';
import chats from './../Components/assets/chats.svg';
import post from './../Components/assets/post.svg';
import search from './../Components/assets/search.svg';
import notification from './../Components/assets/notification.svg';
import settings from './../Components/assets/top-right-img.svg';

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-top">

            <div className="profile-image">
             <img src={settings} alt="profile" />
            <img src={profile} alt=""/>
            
                </div>
            <div className="profile-header">
            <h1>User Name</h1>
            <p>user_name@socius.com</p>
            <div className="Follow">
              <p1>Following</p1>
              <p3> | </p3>
              <p2>Followers</p2>
              </div>
            </div>
            <div className="profile-stats">
            <img src={imgOne} alt=""/>
            <img src={imgTwo} alt=""/>
            <img src={imgThree} alt=""/>
            </div>

            </div>
        <div className="profile-bottom">
            <img src={home} alt=""/>
            <img src={chats} alt=""/>
            <img src={post} alt=""/>
            <img src={search} alt=""/>
            <img src={notification} alt=""/>

        </div>
    </div>
  )
}

export default Profile