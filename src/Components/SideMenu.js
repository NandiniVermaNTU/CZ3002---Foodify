import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../ComponentsCSS/SideMenu.css";

import { NavLink } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

// Change the inline-style on selecting the respective tabs
let activeStyle = {
  color: "#80De80",
  transition: "all 0.2s linear",
};

function Navbar() {

    const [expandNavBar, setExpandNavBar] = useState(false);

  return (
        <div
          className="hamburger-menu"
          onClick={() => {
            setExpandNavBar((currentValue) => !currentValue);
          }}
        >
          {expandNavBar ? (
            <>
              <FontAwesomeIcon
                className="fa-cross-icon"
                icon={faXmark}
                color="#000"
              />
              <nav className="navbar-mobile">
                <ul className="navbar-ul-mobile">
                  {/* To Home page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>

                  {/* To Sign In page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/signin"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Sign In
                    </NavLink>
                  </li>

                  {/* To Sign Up page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/signup"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>

                  {/* To Add Food Item page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/addfooditem"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >

                      Add Food Item
                    </NavLink>
                  </li>

                  {/* To Sell Food Item Page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/sellfooditem"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Sell Food Item
                    </NavLink>
                  </li>

                  {/* To Explore Recipes page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/recipes"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Explore Recipes
                    </NavLink>
                  </li>

                  {/* To Shopping Forum Page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/forum"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Shopping Forum
                    </NavLink>
                  </li>

                  {/* To Community page */}
                  <li className="navbar-list-mobile">
                    <NavLink
                      className="navbar-items-mobile"
                      to="/community"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Community
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <>
              <FontAwesomeIcon className="fa-bars-icon" icon={faBars} color="#0000" />
            </>
          )}
        </div>
  );
}

export default Navbar;
