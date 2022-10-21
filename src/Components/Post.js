import React from "react";
import "../ComponentsCSS/Post.css";
import pic1 from "../Images/chat-icon.png";

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
          <img
            class="img-responsive"
            src={pic1}
            alt="chat-icon"
            className="Post-chat-icon-img1"
          />
        </div>
    </section>
    
)

}

export default Post;