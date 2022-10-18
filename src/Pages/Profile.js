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


export default function Profile() {
  return (
    <section>
        <div class="flex items-center text-center pt-10 pb-5 px-10">
            <div class="flex items-center text-3xl font-semibold text-gray-800 md:text-4xl">My Profile</div>
            {/* <div class="flex text-xl items-center">My Profile</div> */}
        </div>

        <div class="flex px-5 justify-center lg:justify-start">
            <a class="flex-grow mx-4 my-3 px-4 py-3 bg-gray-200 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200" href="/editprofile">Edit Profile</a>
        </div>

        <div class="flex px-5 justify-center lg:justify-start">
            <a class="flex-grow mx-4 my-3 px-4 py-3 bg-red-400 text-white text-sm font-semibold rounded hover:bg-red-600" href="/deleteaccount">Delete Account</a>
        </div>





    </section>

  );
}