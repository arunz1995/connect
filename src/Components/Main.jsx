import React from 'react'
import './Main.css'
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
    <div className="homeContainer">
        <div className="homeBody">
            <div className="homeStory">
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">your story</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 2</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 3</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 4</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 5</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 6</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 7</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 8</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 9</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 10</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 11</div>
                </div>
                <div className="story">
                    <div className="storyIcon"></div>
                    <div className="storyUser">user 12</div>
                </div>
              
                </div>
                <div className="homeFeed">
                    <div className="photoSection">
                        <div className="postHeader">
                            <div className="userDp"></div>
                            <div className="user-Feed-Name">user 1</div>
                        </div>
                        <div className="postedPhoto">

                        </div>
                        <div className="postFooter">
                            <div className="postReaction">
                                <div className="postLike">
                                    <img src={like} alt="" />
                                    <p id='reactionFont'>Like</p>
                                </div>
                                <div className="postDislike">
                                    <img src={dislike} alt="" />
                                    <p id='reactionFont'>Dislike</p>
                                </div>
                                <div className="postComment">
                                    <img src={comment} alt="" />
                                    <p id='reactionFont'>Comments</p>
                                </div>
                            </div>
                            <div className="postReaction-details"></div>
                            <div className="postCaption"></div>
                        </div>
                    </div>
                    <div className="sectionDivider"></div>
                    <div className="onlineSection">
                        <p id='onlineHeading'>online</p>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 1</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 2</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 3</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 4</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 5</p>
                        </div>
                        <div className="onlineUser">
                            <img src={online} alt="" />
                            <p>User 6</p>
                        </div>
                    </div>
                </div>

        </div>
        <div className="homeFooter">
        <div className="footerImage">
       <img src={home} alt="" />
       <p>home</p>
       </div>
       <div className="footerImage">
         <img src={chats} alt="" />
         <p>chats</p>
       </div>
       <div className="footerImage">
         <img src={post} alt="" />
         <p>post</p>
       </div>
       <div className="footerImage">
         <img src={search} alt="" />
         <p>search</p>
       </div>
       <div className="footerImage">
         <img src={notification} alt="" />
         <p>notifications</p>
       </div>

        </div>
    </div>
  )
}

export default Home

