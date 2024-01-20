import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import People from './pages/people';
import Patent from './pages/patents';
import Project from './pages/Project';
import Home from './pages/Home';
import Sponsoredproject from './components/SponsoredProjects';
import ConsultancyProject from './components/ConsultancyProject';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/patent" element={<Patent/>}></Route>
        <Route path="/sponsoredproject" element={<Sponsoredproject/>}></Route>
        <Route path="/consultancyproject" element={<ConsultancyProject/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

