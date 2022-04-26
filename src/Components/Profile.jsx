import React from 'react'
import './Profile.css';
import profile from './../Components/assets/dp.svg'; 
import imgOne from './../Components/assets/imgOne.svg';
import imgTwo from './../Components/assets/imgTwo.svg';
import imgThree from './../Components/assets/imgThree.svg';   
import home from './../Components/assets/homepage-icon.png';
import chats from './../Components/assets/chats.svg';
import post from './../Components/assets/post.svg';
import search from './../Components/assets/search.svg';
import notification from './../Components/assets/notification.svg';
import settings from './../Components/assets/top-right-img.svg';
import cam from './../Components/assets/camera.svg';

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="profile-top">
        <div className='settings-icon'>
          <img src={settings} alt="profile" />
          <p>Settings</p>
          </div>

            <div className="profile-image">
            <img className="dp" src={profile} alt=""/>
            <img className="dp-cam" src={cam} alt=""/>
            
                </div>
            <div className="profile-header">
            <h1>User Name</h1>
            <p1>user_name@socius.com</p1>
            <div className="Follow">
              <p1>Following</p1>
              <div className="follow-count">
                </div>
              <p1>Followers</p1>
              </div>
            </div>
            <div className="profile-stats">
            <img src={imgOne} alt=""/>
            <img src={imgTwo} alt=""/>
            <img src={imgThree} alt=""/>
            </div>

            </div>
            <div className="profileFooter">
        <div className="profile-bottom">
            <img src={home} alt=""/>
            <p>Home</p>
            </div>
            <div className="profile-bottom">
            <img src={chats} alt=""/>
            <p>Chats</p>
            </div>
            <div className="profile-bottom">
            <img src={post} alt=""/>
            <p>Posts</p>
            </div>
            <div className="profile-bottom">
            <img src={search} alt=""/>
            <p>Search</p>
            </div>
            <div className="profile-bottom">
            <img src={notification} alt=""/>
            <p>Notifications</p>
            

        </div>
        </div>
    </div>
  )
}

export default Profile