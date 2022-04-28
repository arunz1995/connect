import React from 'react'
import './Home.css';
import home from './../Components/assets/homepage-icon.png';
import chats from './../Components/assets/chats.svg';
import post from './../Components/assets/post.svg';
import search from './../Components/assets/search.svg';
import notification from './../Components/assets/notification.svg';
import online from './../Components/assets/online.png';
import like from './../Components/assets/heart.svg';
import comment from './../Components/assets/comment.svg';
import dislike from './../Components/assets/dislike.svg';

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
                <div className="Home-body-left-top"></div>
                <div className="Home-body-left-bottom"><h3>User1</h3></div>
                <div className="Home-body-left-post"></div>
                <div className="Home-body-left-section">
                  <div className="Home-body-left-like"><img src={like} alt="" /><p>Like</p></div>
                  <div className="Home-body-left-dislike"><img src={dislike} alt="" /><p>dislike</p></div>
                  <div className="Home-body-left-comment"><img src={comment} alt="" /><p>Comment</p></div>

                </div>
                </div>

                 
                <div className="Home-body-mid">
                  <h2>Online</h2>
                  
                  <div className="Home-body-right">
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User1</h4></div>
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User2</h4></div>
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User3</h4></div>
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User4</h4></div>
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User5</h4></div>
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User6</h4></div>
                  <div className="Home-body-mid-left"><img src={online} alt="" /></div>
                  <div className="Home-body-mid-right"><h4>User7</h4></div>
                  </div>
                
                  
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