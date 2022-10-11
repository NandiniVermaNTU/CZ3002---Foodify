import './App.css';
import React from 'react'

import { Route, Routes } from "react-router-dom";
import SideMenu from "./Components/SideMenu";

import Home from "./Pages/Home";

function App() {
  return (<>
    <SideMenu />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
