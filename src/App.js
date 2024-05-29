import React, { useState } from 'react';
import Header from './components/Header';
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Rebels from './pages/Rebels';
import Siths from './pages/Siths';
import Ships from './pages/Ships';
import Planets from './pages/Planets';

import "./styles/App.css";

function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: "python1", body: "Desc1" },
    { id: 2, title: "python2", body: "Desc2" },
    { id: 3, title: "python3", body: "Desc3" },
  ])
  const [posts2, setPosts2] = useState([
    { id: 1, title: "python1", body: "Desc1" },
    { id: 2, title: "python2", body: "Desc2" },
    { id: 3, title: "python3", body: "Desc3" },
  ])


  return (
    <div className='App'>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rebels' element={<Rebels/>}/>
          <Route path='/siths' element={<Siths/>}/>
          <Route path='/ships' element={<Ships/>}/>
          <Route path='/planets' element={<Planets/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
