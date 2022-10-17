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

function Myitem() {
    const navigate = useNavigate();

    const navigateToContacts = () => {
      // 👇️ navigate to /contacts
      navigate('/contacts');
    };

  return (
    <>
    {/* <Layout preview={true}></Layout>
          <h1>
            <title>Events Hub</title>
          </h1> */}

      {/* <div className="home-img1">
        <picture>
          <source
            media="(min-width: 767px)"
            srcSet="../../Images/myitem-bg.jpg"
          />
          <img
            src="../../Images/myitem-bg.jpg"
            // className="w-screen h-auto"
            alt="My food item background"
          />
          </picture>
        </div> */}
{/* 
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
 */}
    {/* <div className="flex relative">
          <img
            class="img-responsive"
            src={pic1}
            alt="Foodify background"
            className="home-img1"
          />
          <h1 className="flex items-start text-black">Foodify</h1>
          <p className="flex items-center">More food? Share it!</p>
        </div> */}

        <div class="w-full px-8 pt-10 item-center">
            <div class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700 ">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  justify-between px-6 py-3">
                    <p tabindex="0" class="focus:outline-none text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white ">My Food Items</p>
                    <button class="focus:outline-none focus:ring-2  bg-rose-400 focus:ring-rose-700 focus:bg-rose-500 dark:focus:bg-rose-500 flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-rose-100 dark:border-rose-800 ">
                        <p  class="focus:outline-none text-xs md:text-sm leading-none text-white dark:text-gray-200 ">+ Add food item</p>
                    </button>
                </div>
                <div class="px-6 pt-6 overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody>
                            <tr tabindex="0" class="focus:outline-none flex-auto">
                                <td>
                                    <div class="flex items-center py-5">
                                        <div class="bg-gray-100 dark:bg-gray-800  rounded-sm p-2.5">
                                           <img src="../Images/chicken-icon.jpg" alt="chicken" />
                                        </div>
                                        <div class="pl-3">
                                            <div class="flex items-center text-sm leading-none">
                                                <p class="font-semibold text-gray-800 dark:text-white pr-5">Chicken</p>
                                                {/* <p class="text-indigo-700 dark:text-indigo-400  ml-3">10/10/2022</p> */}
                                                <div class="flex items-center justify-center py-1 bg-orange-100 rounded-full">
                                                    <p class="text-xs font-semibold leading-none leading-3 text-orange-700 px-5">20/10/2022</p>
                                                </div>
                                            </div>
                                            <p class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200  mt-2">Description of chickens here</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="pl-16">
                                    <div>
                                        <p class="text-sm font-semibold leading-none text-right text-gray-800 dark:text-white ">17/10/2022</p>
                                        <div class="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                                            <p class="text-xs leading-3 text-green-700">Not opened</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr tabindex="0" class="focus:outline-none">
                                <td>
                                    <div class="flex items-center py-5">
                                        <div class="bg-gray-100 dark:bg-gray-800  rounded-sm p-2.5">
                                           <img src="../Images/chicken-icon.jpg" alt="rice" />
                                        </div>
                                        <div class="pl-3">
                                            <div class="flex items-center text-sm leading-none">
                                                <p class="font-semibold text-gray-800 dark:text-white pr-5 ">Rice</p>
                                                {/* <p class="text-indigo-700 dark:text-indigo-400 content-end px-5">10/10/2022</p> */}
                                                <div class="flex items-center justify-center py-1 bg-orange-100 rounded-full">
                                                    <p class="text-xs font-semibold leading-none leading-3 text-orange-700 px-5">17/10/2022</p>
                                                </div>
                                            </div>
                                            <p class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200  mt-2">Description of rice here</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="pl-16">
                                    <div>
                                        <p class="text-sm font-semibold leading-none text-right text-gray-800 dark:text-white">20/10/2022</p>
                                        <div class="flex items-center justify-center px-2 py-1 mt-2 bg-orange-100 rounded-full">
                                            <p class="text-xs leading-3 text-orange-700">Opened</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

{/* 
        <label for="my-modal" class="btn modal-button">open modal</label>

        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
            <label for="my-modal" class="btn">Yay!</label>
            </div>
        </div>
        </div> */}






          {/* <Link href={'./additem'} passHref> */}
            {/* <div type="button" data-modal-toggle="add-food-item" class="flex flex-col justify-center items-center bg-general-color hover:bg-rose-300 text-black font-bold py-2 px-4 border border-general-color rounded"  >
              Add food items
            </button> */}

            {/* 
            <button class="flex flex-col justify-center items-center bg-general-color hover:bg-rose-300 text-black font-bold py-2 px-4 border border-general-color rounded"  type="button" data-modal-toggle="add-food-item">
              Post to market
            </button>


            <button class="flex flex-col justify-center items-center bg-general-color hover:bg-rose-300 text-black font-bold py-2 px-4 border border-general-color rounded"  type="button" data-modal-toggle="add-food-item">
              Find recipes
            </button> */}


                           













            
          {/* </Link> */}





    </>
  );
}

export default Myitem;
