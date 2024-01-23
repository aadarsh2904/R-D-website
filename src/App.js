import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import People from './pages/people';
import Patent from './pages/patents';
import Project from './pages/Project';
import Home from './pages/Home';
import Prius from './pages/prius';
import Sponsored from './pages/sponsered';
import Consultancy from './pages/consultancy';
import Publication from './pages/publication';
import Tech_Transfer from './pages/tech transfer'
import Cep from './pages/cep';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/patent" element={<Patent/>}></Route>
        <Route path="/publications" element={<Publication/>}></Route>
        <Route path="/Tech_transfer" element={<Tech_Transfer/>}></Route>
        

        
        <Route path="/prius" element={<Prius/>}></Route>
        <Route path="/cep" element={<Cep/>}></Route>
        <Route path="/projects/sponsored" element={<Sponsored/>}></Route>
        <Route path="/projects/consultancy" element={<Consultancy/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

