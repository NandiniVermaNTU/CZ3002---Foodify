import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import SideMenu from "./Components/SideMenu";

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Myitem from './Pages/Myitem';
import AddFoodItem from './Pages/AddFoodItem'
import Layout from './Components/Layout';
import PostItem from './Pages/PostItem';
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {

  return (<>
    <Layout />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/myitem" element={<Myitem/>}></Route>
    <Route path="/addfooditem" element={<AddFoodItem/>}></Route>
    <Route path="/postitem" element={<PostItem/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
