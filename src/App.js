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
import HomeBefore from "./Pages/HomeBefore";
import Marketplace from "./Pages/Marketplace";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";


function App() {

  return (<>
    <Layout />
    <Routes>
    <Route path="/" element={<HomeBefore />}/>
    <Route path="/start" element={<HomeBefore />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/signin" element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/myitem" element={<Myitem/>}></Route>
    <Route path="/addfooditem" element={<AddFoodItem/>}></Route>
    <Route path="/postitem" element={<PostItem/>}></Route>
    <Route path="/marketplace" element={<Marketplace />}> </Route>
    <Route path="/profile" element={<Profile />}> </Route>
    <Route path="/editprofile" element={<EditProfile />}> </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
