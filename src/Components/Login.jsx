import React from 'react'
// import Right from './Right'

const Login = () => {
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
       <div className="login-button">
         <button id='login'> 
            Log In
            </button>
        
       </div>
       </div>
       
       
       <br/>
       <p>"connect people around"</p>
    </div>
     <div className="signUp">
      <div className="signUp-section">
        <div className="signUp-header">
        <h1> sign UP </h1>
        </div>
        <div className="signUp-name">
        <input type="text" placeholder="First Name" id='firstName' />
        <input type="text" placeholder="Last Name" id='lastName' />
        </div>
        <div className="form-field">
            <p1>E-mail</p1>
            <input type="text" />
        </div>
        <div className="form-field">
            <p1>Date Of Birth</p1>
            <input type="date" />
        </div>
        <div className="form-field">
            <p1>Phone Number</p1>
            <input type="text" id='number'/>
        </div>
        <div className="form-field">
            <p1>State</p1>
            <input type="text" />
        </div>
        <div className="form-field">
            <p1>City</p1>
            <input type="text" />
        </div>
        <div className="form-button">
            <button id='btnUp'>Sign-Up</button>
            </div>
           
        </div>

     </div>
   </div>
  )
}

export default Login