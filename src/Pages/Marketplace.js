import React, { useState, useEffect } from "react";
import {Link, useNavigate, NavLink} from "react-router-dom";
import "../PagesCSS/Marketplace.css";
import Post from "../Components/Post.js";
import Layout from "../Components/Layout";

import db from '../firebase/firebase';
import { auth } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs,  addDoc, where } from "firebase/firestore";

function Marketplace() {

  const [query,setQuery] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
 

  const [Posts, setPosts] = useState(
    [
        {
            "title": "",
            "description": "",
            "foodItemName": "",
            "foodItemQuantity": "",
            "foodItemExpiryDate": "",
            "status": "",
            "price": "",
            "sellerEmail": "", 
            "sellerName": "",
            "sellerID": "",
        }
    ]
);

  const fetchPosts = async () => {
    try {
        const q = query(collection(db, "posts"));
        const doc = await getDocs(q);
        const items = doc.docs;
        let itemDocs = items.map(item => item.data());
        setPosts(itemDocs);
        // console.log("itemdoc:", itemDocs);
        // console.log("fooditem", foodItems);
    } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchPosts();
    console.log(Posts);
  }, [user, loading]);

    return (
    <section>
      <Layout/>
     {/* Marketplace heading */}
      <div class="flex items-center text-center pt-3 pb-2 pl-12 ml-5">
        <div class="flex items-center text-4xl font-semibold text-black-800 md:text-2xl">
           Marketplace 
        </div>
      </div>

      {/* Marketplace sub heading */}
      <div class="flex items-center text-center pt-1 pb-2 pl-2">
        <div class="flex items-center text-1xl font-medium text-pink-700 md:text-1xl">
        One stop solution to sell and buy pre-loved food and contribute towards sustainability 
        </div>
      </div>

      <div class="focus:outline-none mx-1 focus:ring-2  bg-rose-400 focus:ring-rose-700 focus:bg-rose-500 dark:focus:bg-rose-500 flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-rose-100 dark:border-rose-800 ">
          <a  class="focus:outline-none text-xs md:text-sm leading-none text-white dark:text-gray-200" href='/sellfooditem'>+ Post on the market</a>
      </div>

      {/* Searchbar */}
      <div class="flex pt-1 pb-2 pl-1 pr-1">
            <input
              type="text"
              id = "searchbar"
              class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search food item"
              required
            ></input>
      </div>

      

      {/* Post */}
      {/* <div class="flex pt-1 pb-2 pl-1"> */}

      {/* <div class="flex pt-1 pb-2 pl-1.5"> */}
      <div class="flex pt-1 pb-2 pl-1">
        <Post /> 
      </div>

    </section>
    );
  }
  
  export default Marketplace;  