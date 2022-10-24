import React from "react";
import Layout from "../Components/Layout";
import SideMenu from "../Components/SideMenu";
//import { Link } from "react-router-dom";
import "../PagesCSS/Home.css";

let activeStyle = {
  color: "#80De80",
  transition: "all 0.2s linear",
};


export default function ChangePassword() {
  return (

    
    <section>
        <Layout/>
        <div class="flex items-center text-center pt-10 pb-5 px-10">
            <div class="flex items-center text-3xl font-semibold text-gray-800 md:text-4xl">Change Password</div>
        </div>


        <div class="px-4">
            <form class="bg-white px-8 py-6 pb-8 mb-4 bg-gray-100">
                <div class="mb-6">
                    <label class="block mb-2 bg-general-colortext-sm font-medium text-gray-900 dark:text-gray-300">Old Password</label>
                    <input id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yen" required></input>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Password</label>
                    <input id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required></input>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmed New Password</label>
                    <input id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="optional"></input>
                </div>
                <button type="submit" class="text-white bg-teal-300 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-300 dark:hover:bg-teal-500 dark:focus:ring-teal-700 my-2">Confirm</button>
                <button class="text-rose-900 bg-general-color hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-general-color dark:hover:bg-rose-500 dark:focus:ring-rose-700 my-2">Cancel</button>
            </form>

        </div>
    </section>
  );
}
