import Login from "./Components/Login";
import Otp from "./Components/Otp";
import Profile from "./Components/Profile";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';


function App() {
  return (
    
    <Routes>
    <Route path="login" element={<Login/>}/>
    <Route path="otp" element={<Otp/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="Chat" element={<Chat/>}/>
    <Route path="Home" element={<Home/>}/>
    </Routes>
    
    
  );
}
export default App;
