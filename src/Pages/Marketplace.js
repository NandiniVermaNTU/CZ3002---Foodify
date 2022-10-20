import React, { useState } from "react";
import "../PagesCSS/Marketplace.css";
import Post from "../Components/Post.js";

function Marketplace() {

  const [query,setQuery] = useState("");
    return (
    <section>

     {/* Marketplace heading */}
      <div class="flex items-center text-center pt-3 pb-2 ml-20">
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
      <div class="flex pt-1 pb-2 pl-1">
        <Post /> 
      </div>

    </section>
    );
  }
  
  export default Marketplace;  
