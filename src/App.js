import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="main-container">
     <div className="login">
        <div className="login-section">
          <div className="login-header">
       <h1> log IN </h1>
       
          </div>
       <input type="text" placeholder="username" id='name' />
      <br/>
        <input type="password" placeholder="password" id='password' />
        <br/>
        </div>
        <div className="login-button">
          <button> 
          
             </button>
         
        </div>
        <br/>
        <br/>
        <p>"connect people around"</p>
     </div>
      <div className="signup">
      
      </div>
    </div>
  );
}

export default App;
