import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase/firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";
//
//import React from "react";
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
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <section>

      {/* Foodify name section */}
      {/* <div className="home-section1">
        <h1 className="home-heading1">Foodify</h1>
        <p className="home-description1">More food? Share it!</p>
      </div> */}
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
        <div class="flex items-center text-center lg:text-left py-10 md:px-12 lg:w-1/2">
                 <div>
                     <h2 class="text-4xl font-semibold text-gray-800 md:text-4xl italic py-5 px-5">Welcome to <span class="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-bold italic">Foodify</span></h2>
                     
                     {/* <ul>
                      <div>
                        <a class="mt-2 text-s italic text-teal-900 md:text-base rounded bg-rose-300 mr-10 py-2" href="/signin">Track you food’s expiry</a>
                      </div>
                      <div>
                        <a class="mt-2 text-s italic text-orange-900 md:text-base rounded bg-gradient-to-r from-white via-orange-200 to-white ml-14 py-2">Sell Excess Food</a>
                      </div>
                      <div>
                        <a class="mt-2 text-s italic text-cyan-900 md:text-base rouneded bg-gradient-to-r from-white via-cyan-200 to-white mr-14 py-2">Reduce Wastage</a>
                      </div>
                    </ul> */}
                    <div class="bg-gray-100 rounded mx-10 my-10">
                      <div class="flex px-5 justify-center lg:justify-start">
                          <a class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200" href="/profile">My Profile</a>
                      </div>
                      <div class="flex px-5 justify-center lg:justify-start">
                          <a class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200" href="/myitem">View My Items</a>
                      </div>

                      <div class="flex px-5 justify-center lg:justify-start">
                          <a class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200" href="/marketplace">Visit Marketplace</a>
                      </div>
                      <div class="flex px-5 justify-center lg:justify-start">
                        <div class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200">Logged in as</div>
                        <div class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200"> {name}</div>
                        <div class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200">{user?.email}</div>
                        <button class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200" onClick={logout}>
                          Logout
                        </button>
                      </div>
                    </div>
                     
              
    </section>
    // <section>
    //   {/* Foodify name section */}
    //   <div className="home-section1">
    //     <h1 className="home-heading1">Foodify</h1>
    //     <p className="home-description1">More food? Share it!</p>
    //   </div>
    //   Foodify purpose section
    //   <div className="home-section2">
    //     <div>
    //       <h2 className="home-heading2">
    //         Track your food's expiry, Sell Excess Food, Donate, Reduce Wastage.
    //       </h2>
    //       <div className="home-img2">
    //         <img src={pic2} alt="Together" className="home-img2" />
    //         {/* to have the grey box over the 2nd image */}
    //         <div className="home-section2-1"></div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Quick Searches Section */}
    //   <div className="home-section3">
    //     <h2 className="home-heading3">Quick Searches </h2>
    //     <div className="quick-search">
    //           <nav >
    //             <ul className="quick-search-ul">
    //               {/* To Home page */}
    //               <li className="quick-search-list">
    //                 <NavLink
    //                   className="quick-search-items"
    //                   to="/howitworks"
    //                   style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                   }
    //                 >
    //                   How it Works?
    //                 </NavLink>
    //               </li>

    //               {/* To Sign In page */}
    //               <li className="quick-search-list">
    //                 <NavLink
    //                   className="quick-search-items"
    //                   to="/collectionpoint"
    //                   style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                   }
    //                 >
    //                   Nearby Food Drop Off/Collection Points
    //                 </NavLink>
    //               </li>

    //               {/* To Sign Up page */}
    //               <li className="quick-search-list">
    //                 <NavLink
    //                   className="quick-search-items"
    //                   to="/signup"
    //                   style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                   }
    //                 >
    //                   Sign Up
    //                 </NavLink>
    //               </li>

    //               {/* To Add Food Item page */}
    //               <li className="quick-search-list">
    //                 <NavLink
    //                   className="quick-search-items"
    //                   to="/recipes"
    //                   style={({ isActive }) =>
    //                     isActive ? activeStyle : undefined
    //                   }
    //                 >

    //                   Simple Recipes
    //                 </NavLink>
    //               </li>

    //             </ul>
    //           </nav>
    //     </div>
    //   </div>
    //   {/* copyright section */}
    //   <div className="home-section4">
    //     <h2 className="home-heading4">@2022 Foodify. All rights reserved</h2>
    //   </div>
    // </section>
  );
}

export default Home;
