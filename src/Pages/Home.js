import React from "react";
//import { Link } from "react-router-dom";
import "../PagesCSS/Home.css";
import pic1 from "../Images/FoodifyBckgd.jpg";
import pic2 from "../Images/HomeImg2.jpg";
import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "#80De80",
  transition: "all 0.2s linear",
};


function Home() {
  return (
    <section>
      {/* Foodify name section */}
      <div className="home-section1">
        <h1 className="home-heading1">Foodify</h1>
        <p className="home-description1">More food? Share it!</p>
      </div>
      {/* Foodify purpose section */}
      {/* <div className="home-section2">
        <div>
          <h2 className="home-heading2">
            Track your food's expiry, Sell Excess Food, Donate, Reduce Wastage.
          </h2>
          <div className="home-img2">
            <img src={pic2} alt="Together" className="home-img2" /> */}
            {/* to have the grey box over the 2nd image */}
            {/* <div className="home-section2-1"></div>
          </div>
        </div>
      </div> */}
      {/* Quick Searches Section */}
      {/* <div className="home-section3">
        <h2 className="home-heading3">Quick Searches </h2>
        <div className="quick-search">
              <nav >
                <ul className="quick-search-ul"> */}
                  {/* To Home page */}
                  {/* <li className="quick-search-list">
                    <NavLink
                      className="quick-search-items"
                      to="/howitworks"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      How it Works?
                    </NavLink>
                  </li> */}

                  {/* To Sign In page */}
                  {/* <li className="quick-search-list">
                    <NavLink
                      className="quick-search-items"
                      to="/collectionpoint"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Nearby Food Drop Off/Collection Points
                    </NavLink>
                  </li> */}

                  {/* To Sign Up page */}
                  {/* <li className="quick-search-list">
                    <NavLink
                      className="quick-search-items"
                      to="/signup"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li> */}

                  {/* To Add Food Item page */}
                  {/* <li className="quick-search-list">
                    <NavLink
                      className="quick-search-items"
                      to="/recipes"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >

                      Simple Recipes
                    </NavLink>
                  </li>

                </ul>
              </nav>
        </div> */}
      {/* </div> */}
    </section>
  );
}

export default Home;
