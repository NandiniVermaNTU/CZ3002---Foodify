// import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Layout from "../Components/Layout";
import "../PagesCSS/Home.css";
import "../PagesCSS/Myitem.css";

let activeStyle = {
  color: "#80De80",
  transition: "all 0.2s linear",
};

export default function ForgetPassword() {
  return (
    <section>
      <Layout/>
      <div class="flex items-center text-center pt-10 pb-5 px-10">
        <div class="flex items-center text-3xl font-semibold text-gray-800 md:text-4xl">
          Reset Your Password
        </div>
      </div>

      <div class="px-4">
        <form class="bg-white px-8 py-6 pb-8 mb-4 bg-gray-100">
          <div class="mb-6">
            <label class="block mb-2 bg-general-colortext-sm font-medium text-gray-900 dark:text-gray-300">
              Enter Email Address
            </label>
            <input
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="abc@email.com"
              required
            ></input>
          </div>
          <div class="flex justify-center lg:justify-start mt-5 w-50">
            < button type="submit"
              class="text-white bg-green-300 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-teal-300 dark:hover:bg-teal-500 dark:focus:ring-teal-700 my-2"
            >
              Send Email to Reset Password 
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
