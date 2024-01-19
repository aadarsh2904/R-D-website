import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import People from './pages/people';
import Project from './pages/Project'

// import Project from './pages/Project';

import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;

