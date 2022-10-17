import React, { useState } from "react";
import {Link, useNavigate, NavLink} from "react-router-dom";
import "../PagesCSS/Home.css";
import "../PagesCSS/Myitem.css"
import pic1 from "../Images/FoodifyBckgd.jpg";
import pic2 from "../Images/HomeImg2.jpg";
import Layout from "../Components/Layout";


let activeStyle = {
    color: "#80De80",
    transition: "all 0.2s linear",
  };


export default function PostItem() {
    return (
        <>
        <div class="px-4">
            <script src="https://unpkg.com/flowbite@1.5.3/dist/datepicker.js"></script>

            <form class="bg-white px-8 pt-6 pb-8 mb-4">
                <div class="mb-6">
                    <label class="block mb-2 bg-general-colortext-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input id="food-item" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1 apple" required></input>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Food Item</label>
                    <input id="food-category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    {/* <input id="food-description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="still fresh"></input> */}
                    <input datetimepicker class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" type="text" placeholder="Please select a date" />

                </div>
                
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload Image (jpg, png, svg, jpeg)</label>
                    {/* <label class="inline-block mb-2 text-gray-500">Upload
                                    Image(jpg,png,svg,jpeg)</label> */}
                    <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div class="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                        clip-rule="evenodd" />
                                </svg>
                                <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                    Select a photo</p>
                            </div>
                            <input type="file" class="opacity-0" />
                        </label>
                    </div>
                </div>
                
                <button type="submit" class="text-white bg-teal-300 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-300 dark:hover:bg-teal-500 dark:focus:ring-teal-700 my-2">Post</button>
                <button class="text-rose-900 bg-general-color hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-general-color dark:hover:bg-rose-500 dark:focus:ring-rose-700 my-2">Cancel</button>
            </form>

        </div>

        <script src="https://unpkg.com/flowbite@{{< current_version >}}/dist/datepicker.js"></script>

        </>

        
);

}
