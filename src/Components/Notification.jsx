import React from 'react'
import './Notification.css'

const Notification = () => {
  return (
    <div className="notification-container">
        <div className="notification-header">
            <h1 className="head">Notification</h1>
         <div className="notification-section"> 
            <div className="notification">  
                <div className="notification-icon"></div>
                <p5>User 5 and 6 others liked your post </p5>
                <p6>2 minutes ago</p6>
                </div>
                <div className="notification">  
                <div className="notification-icon"></div>
                <p5>User 3 and 2 others commented on your post </p5>
                <p6>5 minutes ago</p6>
                </div>
                <div className="notification">  
                <div className="notification-icon"></div>
                <p5>User 7 and 16 others liked your post </p5>
                <p6>18 minutes ago</p6>
                </div>
                <div className="notification">  
                <div className="notification-icon"></div>
                <p5>User 9 started to following you </p5>
                <p6>1 hours ago</p6>
                </div>
                <div className="notification">  
                <div className="notification-icon"></div>
                <p5>User 8  liked your post </p5>
                <p6>1 hours  ago</p6>
                </div>
                <div className="notification">  
                <div className="notification-icon"></div>
                <p5>User 1 and 206 others liked your post </p5>
                <p6>2 hours ago</p6>
                </div>
    </div>
    </div>
    </div>
  )
}

export default Notification