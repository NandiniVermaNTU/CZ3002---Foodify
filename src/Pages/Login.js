// import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "../PagesCSS/Home.css";
import "../PagesCSS/Myitem.css";

let activeStyle = {
  color: "#80De80",
  transition: "all 0.2s linear",
};

export default function Login() {
  return (
    <section>
      <div class="flex items-center text-center pt-10 pb-5 px-10">
        <div class="flex items-center text-3xl font-semibold text-gray-800 md:text-4xl">
          Login
        </div>
      </div>

      <div class="px-4">
        <form class="bg-white px-8 py-6 pb-8 mb-4 bg-gray-100">
          <div class="mb-6">
            <label class="block mb-2 bg-general-colortext-sm font-medium text-gray-900 dark:text-gray-300">
              Userame or Email Address*
            </label>
            <input
              id="username"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="abc@email.com"
              required
            ></input>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Password
            </label>
            <input
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="minimum 8 characters"
              required
            ></input>
          </div>
          <div class="text-sm">
            <a
              href="/forgetpassword"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              &emsp; &emsp; Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            class="text-white bg-teal-300 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-teal-300 dark:hover:bg-teal-500 dark:focus:ring-teal-700 my-2"
          >
            Login
          </button>

          <div class="text-sm"> <br/>&emsp; &emsp; &emsp; New to Foodify? 
            <a
              href="/signup"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <br/>&emsp; &emsp; &emsp; &emsp; Sign Up!
            </a>
            </div>
        </form>
      </div>
    </section>
  );
}
