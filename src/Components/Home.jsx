import React from 'react'
import './Home.css';
import home from './../Components/assets/homepage-icon.png';
import chats from './../Components/assets/chats.svg';
import post from './../Components/assets/post.svg';
import search from './../Components/assets/search.svg';
import notification from './../Components/assets/notification.svg';

const Home = () => {
  return (
    <div className="Home-container">
        <div className="Home-header">
        <div className="Home-top">
        <div className="Home-text"> <p>Your Story</p> </div>
            </div>
            <div className="Home-top">
            <div className="Home-text">  <p>User 1</p> </div>
            </div>
            <div className="Home-top">
            <div className="Home-text"> <p>User 2</p> </div>
            </div>
            <div className="Home-top">
            <div className="Home-text"><p>User 3</p></div>
            </div>
            <div className="Home-top">
            <div className="Home-text"><p>User 4</p></div>
            </div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 5</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 6</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 7</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 8</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 9</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 10</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 11</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 12</p></div>
            <div className="Home-top">
            <div className="Home-text"></div><p>User 13</p></div>
            
            
            
            
            
            </div>




        <div className="Home-footer">
        <div className="Home-bottom">
        <img src={home} alt=""/>
            <p>Home</p>
            </div>
            <div className="Home-bottom">
            <img src={chats} alt=""/>
            <p>Chats</p>
            </div>
            <div className="Home-bottom">
            <img src={post} alt=""/>
            <p>Posts</p>
            </div>
            <div className="Home-bottom">
            <img src={search} alt=""/>
            <p>Search</p>
            </div>
            <div className="Home-bottom">
            <img src={notification} alt=""/>
            <p>Notifications</p>
        </div>
        </div>

    </div>
  )
}

export default Home