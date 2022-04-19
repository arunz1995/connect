import Login from "./Components/Login";
import './App.css';
import {Route, Routes } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Routes>
    <Route path="login" element={<Login/>}/>
    </Routes>
   
  );
}

export default App;
