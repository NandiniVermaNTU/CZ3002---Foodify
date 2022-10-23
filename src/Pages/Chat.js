import React from "react";
import Post from "../Components/Post.js";
import "../PagesCSS/Marketplace.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import PAY from "../Images/pay(new).jpg";
import ENDCHAT from "../Images/endchatnew.jpg";
import SEND from "../Images/send.png";

function Chat() {

    return (
    <section>

     {/* Item-Price heading */}
      <div class="flex items-center text-center pt-3 pb-2 pl-12 ml-5">
        <div class="flex items-center text-4xl font-semibold text-black-800 md:text-2xl">
           Item - Price 
        </div>
      </div>

    
      <div class="flex pt-1 pb-10 pl-1.5">
         {/* Item display*/}
        <div className="Post-section1">
            <h1 className="Post-heading1">Username </h1>
            <h1 className="Post-heading1"> Item: </h1>
            <h1 className="Post-heading1"> Price: </h1>
            <h1 className="Post-heading1"> Expiry: </h1>
            <h1 className="Post-heading1"> Opened/Unopened: </h1>
            <h1 className="Post-heading1"> Description: </h1>
            <h1 className="Post-heading1"> Image: </h1>
        </div>
      </div>

      <div class="flex py-60 pb-9">
        {/* Chat heading */}
        <label class="bg-gray-300 bg-gray-50 text-2xl w-full font-semibold text-center text-gray-900 text-sm">
          CHAT
        </label>
      </div>

      <div class="flex pl-6 pb-4">
        {/* Text messages */}
        <h2 class="text-sm rounded-lg bg-pink-100 bg-gray-50 text-1xl w-full text-center h-full text-gray-900 text-sm">
          Text messages
        </h2>
      </div>

      <div class="flex pl-6 pb-4">
        {/* Text messages */}
        <h2 class="text-sm rounded-lg bg-pink-100 bg-gray-50 text-1xl text-center w-full h-full text-gray-900 text-sm">
        Text messages
        </h2>
      </div>

      <div class="flex pr-6 pb-4">
        {/* Text messages */}
        <h2 class="text-sm rounded-lg bg-pink-200 bg-gray-50 text-1xl text-center w-full h-full text-gray-900 text-sm">
        Text messages
        </h2>
      </div>

      <div class="flex pr-6 pb-4">
        {/* Text messages */}
        <h2 class="text-sm rounded-lg bg-pink-200 bg-gray-50 text-1xl text-center w-full h-full text-gray-900 text-sm">
        Text messages
        </h2>
      </div>

      <div class="flex pl-6 pb-0">
        {/* Text messages */}
        <h2 class="text-sm rounded-lg bg-pink-100 bg-gray-50 text-1xl text-center w-full h-full text-gray-900 text-sm">
        Text messages
        </h2>
      </div>


      <div class="flex mt-9 mb-5">
        <input 
              id="message"
              type="text"
              class="ml-2 mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Send message"
            ></input>
          <img
            class="flex mr-1"
            width="50" 
            src={SEND}
            alt="PAY-icon"
          />  
        </div>  

      <div class="flex ml-7">
        <button>
          <nav>
          <ul>
            <li class="flex"> <a href="/"> 
            <img
            class="flex"
            width="110" 
            src={PAY}
            alt="PAY-icon"
          />
          </a></li>
          </ul>
          </nav>
          </button>

          <button class="flex ml-10">
          <nav>
          <ul>
            <li class="flex"> <a href="/Marketplace"> 
            <img
            class="flex"
            width="110" 
            src={ENDCHAT}
            alt="PAY-icon"
          />
          </a></li>
          </ul>
          </nav>
          </button>

        </div> 

    </section>

    );
  }
  
  export default Chat;  