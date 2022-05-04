import Login from "./Components/Login";
import Otp from "./Components/Otp";
import Profile from "./Components/Profile";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Settings from "./Components/Settings";
import Search from "./Components/Search";
import Notification from "./Components/Notification";
import Comments from "./Components/Comments";
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
    {/* <Route path="Home" element={<Home/>}/> */}
    <Route path="Main" element={<Main/>}/>
    <Route path="Settings" element={<Settings/>}/>
    <Route path="Search" element={<Search/>}/>
    <Route path="Notification" element={<Notification/>}/>
    <Route path="Comments" element={<Comments/>}/>
    </Routes>
    
    
  );
}
export default App;
