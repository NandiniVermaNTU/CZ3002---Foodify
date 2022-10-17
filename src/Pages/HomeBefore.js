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


export default function HomeBefore() {
  return (
    <section>
        <div class="flex items-center text-center lg:text-left py-10 md:px-12 lg:w-1/2">
                 <div>
                     <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl italic py-5">Getting started with <span class="text-rose-700 font-bold italic">Foodify</span></h2>
                     <p class="mt-2 text-s italic text-teal-900 md:text-base rounded bg-gradient-to-r from-white via-teal-200 to-white mr-10 py-2">Track you food’s expiry</p>
                     <p class="mt-2 text-s italic text-orange-900 md:text-base rounded bg-gradient-to-r from-white via-orange-200 to-white ml-14 py-2">Sell Excess Food</p>
                     <p class="mt-2 text-s italic text-cyan-900 md:text-base rouneded bg-gradient-to-r from-white via-cyan-200 to-white mr-14 py-2">Reduce Wastage</p>
                     <div class="flex justify-center lg:justify-start mt-6">
                         <a class="px-4 py-3 bg-teal-700 text-white text-sm font-semibold rounded hover:bg-teal-500" href="/signin">Log in</a>
                         <a class="mx-4 px-4 py-3 bg-gray-100 text-gray-500 text-sm font-semibold rounded hover:bg-gray-200" href="/signup">Sign up</a>
                     </div>
                 </div>
        </div>
    </section>
    // <div class="w-full">
    //     <div class="flex bg-white" style="height:600px;">
    //         <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
    //             <div>
    //                 <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span class="text-indigo-600">Idea</span></h2>
    //                 <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
    //                 <div class="flex justify-center lg:justify-start mt-6">
    //                     <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
    //                     <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
    //             <div class="h-full object-cover" style="background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)">
    //                 <div class="h-full bg-black opacity-25"></div>
    //             </div>
    //         </div> */}
    //     </div>
    // </div>
  );
}
