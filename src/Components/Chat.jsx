import React from 'react'
import './Chat.css';
import side from './../Components/assets/sideway.png';
// import lense from './../Components/assets/lenses.png';
import camera from './../Components/assets/camera.svg';
const Chat = () => {
  return (
    <div className="chat-container">
        <div className="chat-top">
    <div className="chat-section">
    <img src={side} alt="" />
    <div className="chat-header">
        
    <input type="text" placeholder="Search people to chat " id='search' />
    {/* <img src={lense} alt="" /> */}
    </div>
    </div>
    <div className="chat-body">
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 1 </h2></div> 
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 2 </h2></div>
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 3 </h2></div>
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 4 </h2></div>
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 5 </h2></div>
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 6 </h2></div>
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    <div className="chat-body-one"></div>
    <div className="chat-body-one-header"><h2> User 7 </h2></div>
    <div className="chat-body-one-body"><img src={camera} alt="" /></div>
    
    
        
        
        </div>

    
    </div>
    </div>
  )
}

export default Chat