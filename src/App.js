import './App.css';
import React from 'react'

import { Route, Routes } from "react-router-dom";
import SideMenu from "./Components/SideMenu";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import Home from "./Pages/Home";

function App() {
  return (<>
    <SideMenu />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
    </>
  );
}

export default App;
