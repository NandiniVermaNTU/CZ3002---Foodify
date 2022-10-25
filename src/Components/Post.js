import React from "react";
import "../ComponentsCSS/Post.css";
import pic1 from "../Images/chat-icon.png";
import "../Pages/Chat.js";
import { NavLink } from "react-router-dom";
//userName, item, price, expiry, status, description

function Post({title, name, email, foodItem, quantity,expiry, price, status, description}) {
return(

    <section>
        {/* Item display*/}
        <div className="Post-section1">
            <h1 className="Post-heading1"> Title: {title} </h1>
            <h1 className="Post-heading1"> Seller: {name} ({email})</h1>
            <h1 className="Post-heading1"> Item: {quantity} {foodItem}</h1>
            <h1 className="Post-heading1"> Expiry: {expiry}</h1>
            <h1 className="Post-heading1"> Price: {price}</h1>
            <h1 className="Post-heading1"> Status: {status}</h1>
            <h1 className="Post-heading1"> Description: {description}</h1>        
          
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