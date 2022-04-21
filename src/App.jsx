import Login from "./Components/Login";
import Otp from "./Components/Otp";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';

function App() {
  return (
    
    <Routes>
    <Route path="login" element={<Login/>}/>
    <Route path="otp" element={<Otp/>}/>
    </Routes>
    
    
  );
}
export default App;
