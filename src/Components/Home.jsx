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
            <div className="Home-story">
        <div className="Home-top">
            <div className="homeStory-icon"></div>
        <div className="Home-text"> Your Story </div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">  User 1 </div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text"> User 2 </div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 3</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 4</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 5</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 6</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 7</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 8</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 9</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 10</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 11</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 12</div>
            </div>
            <div className="Home-top">
            <div className="homeStory-icon"></div>
            <div className="Home-text">User 13</div>
            </div>
            </div>
            <div className="Home-body">
              <div className="Home-body-left">
                </div>
                <div className="Home-body-right">
                    </div>
            </div> 
           
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