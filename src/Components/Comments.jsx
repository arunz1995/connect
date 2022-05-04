import React from 'react'
import './Comments.css'
import comment from './../Components/assets/comment.svg';
import white from './../Components/assets/white-heart.svg';

const Comments = () => {
  return (
    <div className="comments-container">
        <div className="comments-section">
        <div className="comments-header">
            <h1>Comments</h1>
            <img src={comment} alt=""/>
            </div> 
            <div className="comments-body">
            <div className="comment-part">  
                <div className="comment-part-one">
                <div className="comment-icon"></div>
                <p5>User 5 </p5>
                <img src={white} alt=""/>
                </div>
                <div className="comment-part-two">
                    <div className="comment-part-msg">
                <p6>0 m</p6>
                <p7> 0 likes</p7>
                <p8> Reply</p8>
                </div>
                </div>
                
                </div>
                <div className="comment-part">  
                <div className="comment-part-one">
                <div className="comment-icon"></div>
                <p5>User 2 </p5>
                <img src={white} alt=""/>
                </div>
                <div className="comment-part-two">
                    <div className="comment-part-msg">
                <p6>0 m</p6>
                <p7> 0 likes</p7>
                <p8> Reply</p8>
                </div>
                </div>
                
                </div>
                <div className="comment-part">  
                <div className="comment-part-one">
                <div className="comment-icon"></div>
                <p5>User 7 </p5>
                <img src={white} alt=""/>
                </div>
                <div className="comment-part-two">
                    <div className="comment-part-msg">
                <p6>0 m</p6>
                <p7> 0 likes</p7>
                <p8> Reply</p8>
                </div>
                </div>
                
                </div>
                <div className="comment-part">  
                <div className="comment-part-one">
                <div className="comment-icon"></div>
                <p5>User 4 </p5>
                <img src={white} alt=""/>
                </div>
                <div className="comment-part-two">
                    <div className="comment-part-msg">
                <p6>0 m</p6>
                <p7> 0 likes</p7>
                <p8> Reply</p8>
                </div>
                </div>
                
                </div>
                <div className="comment-part">  
                <div className="comment-part-one">
                <div className="comment-icon"></div>
                <p5>User 6 </p5>
                <img src={white} alt=""/>
                </div>
                <div className="comment-part-two">
                    <div className="comment-part-msg">
                <p6>0 m</p6>
                <p7> 0 likes</p7>
                <p8> Reply</p8>
                </div>
                </div>
                
                </div>
        
           </div>
        </div>
    </div>
  )
}

export default Comments