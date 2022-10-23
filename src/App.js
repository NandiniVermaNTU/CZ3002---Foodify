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
import ForgetPassword from "./Pages/ForgetPassword";
import ChangePassword from "./Pages/ChangePassword";
<<<<<<< HEAD
// import Recipe from "./Pages/Recipe";
import Recipe from "./Pages/Recipe";
=======
import Chat from "./Pages/Chat";
>>>>>>> 3b2883e63ee2432189361347324f124b9922e309


function App() {

  return (<>
    <Layout />
    <Routes>
    <Route path="/" element={<HomeBefore />}/>
    <Route path="/start" element={<HomeBefore />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/signin" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/forgetpassword" element={<ForgetPassword/>}/>
    <Route path="/changepassword" element={<ChangePassword/>}></Route>
    <Route path="/myitem" element={<Myitem/>}/>
    <Route path="/addfooditem" element={<AddFoodItem/>}/>
    <Route path="/sellfooditem" element={<PostItem/>}/>
    <Route path="/marketplace" element={<Marketplace />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/editprofile" element={<EditProfile />}/>
<<<<<<< HEAD
    <Route path="/recipe" element={<Recipe />}/>
    {/* <Route path="/test" element={<ButtonClick />}/> */}
=======
    <Route path="/chat" element={<Chat />}/>
>>>>>>> 3b2883e63ee2432189361347324f124b9922e309
    </Routes>
    <Footer />
    </>
  );
}

export default App;
