import React, { useState } from "react";
import {Link, useNavigate, NavLink} from "react-router-dom";
import "../PagesCSS/Home.css";
import "../PagesCSS/Myitem.css"
import pic1 from "../Images/FoodifyBckgd.jpg";
import pic2 from "../Images/HomeImg2.jpg";

let activeStyle = {
    color: "#80De80",
    transition: "all 0.2s linear",
  };

function Myitem() {
    const navigate = useNavigate();

    const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate('/contacts');
    };

  return (
    // <div className="home-section1">
    //     <img
    //       class="img-responsive"
    //       src={pic1}
    //       alt="Foodify background"
    //       className="home-img1"
    //     />
    //     <h1 className="home-heading1">Foodify</h1>
    //     <p className="home-description1">More food? Share it!</p>
    // </div>
    <section>
        <h1 className="myitem-heading1">My Items</h1>
        <h1 className="text-3xl font-bold">
            Hello world!
        </h1>
        <nav >
            <ul className="quick-search-ul">
                <li className="quick-search-list">
                    <NavLink className="quick-search-items"
                            to="/addfooditem"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                        Add Food Item
                    </NavLink>
                </li>
            </ul>
        </nav>
    </section>
  );
}

export default Myitem;
