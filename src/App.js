import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
