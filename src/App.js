import React from "react";
import { Route, Routes } from "react-router-dom";


import Layout from './Layout/Layout'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Friends from './pages/Friends/Friends'
import MyProfile from './pages/MyProfile/MyProfile'
import Register from './pages/Register/Register';

import './styles/style.text.scss'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='friends' element={<Friends/>}></Route>
          <Route path='myprofile' element={<MyProfile/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
