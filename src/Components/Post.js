import React from "react";
import "../ComponentsCSS/Post.css";
import pic1 from "../Images/chat-icon.png";
import "../Pages/Chat.js";
import { NavLink } from "react-router-dom";

function Post() {

return(

    <section>
        {/* Item display*/}
        <div className="Post-section1">
            <h1 className="Post-heading1">Username </h1>
            <h1 className="Post-heading1"> Item: </h1>
            <h1 className="Post-heading1"> Price: </h1>
            <h1 className="Post-heading1"> Expiry: </h1>
            <h1 className="Post-heading1"> Opened/Unopened: </h1>
            <h1 className="Post-heading1"> Description: </h1>
            <h1 className="Post-heading1"> Image: </h1>
          
          
          <button type="button">
          <nav  class="chat-button">
          <ul>
            <li> <a href="/chat"> 
            <img
            class="img-responsive"
            href="/chat"
            src={pic1}
            alt="chat-icon"
            className="Post-chat-icon-img1"
          />
          </a></li>
          </ul>
          </nav>
          </button>
        </div>

    </section>
    
)

}

export default Post;