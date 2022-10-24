import React, { useState } from "react";
import {Link, useNavigate, NavLink} from "react-router-dom";
import "../PagesCSS/Home.css";
import "../PagesCSS/Myitem.css"
import Layout from "../Components/Layout";
import "..//ComponentsCSS/SideMenu.css";
import db from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

//import Datepicker from 'flowbite-datepicker/Datepicker';


let activeStyle = {
    color: "#80De80",
    transition: "all 0.2s linear",
  };


export default function AddFoodItem() {
    const [name , setName] = useState();
    const [quantity , setQuantity] = useState();
    const [expiryDate , setExpiryDate] = useState();
    const [userID, setUserID] = useState();

    // const Push = () => {
    //     db.collection("food-items").add({
    //       name : name,
    //       quantity : quantity,
    //       expiryDate : expiryDate
    //     }).catch(alert);
    //   }
    // const Push = async () => {
    //     console.log("name", name);
    //     console.log("quantity", quantity);
    //     console.log("expiry date", expiryDate);
    //     const docRef = await addDoc(collection(db, "food-items"), {
    //         name : name,
    //         quantity : quantity,
    //         expiryDate : expiryDate
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // }

    const Push = async () => {
        try {
            const docRef = await addDoc(collection(db, "food-items"), {
            name : name,
            quantity : quantity,
            expiryDate : expiryDate
            });
            // alert("Document written with ID: ", docRef.id);
          }
        catch (err) {
          console.error(err);
          alert(err.message);
        }
      };

    return (
        <>
        <Layout/>
        <div class="px-4">
            <form class="bg-white px-8 pt-6 pb-8 mb-4">
                <div class="mb-6">
                    <label class="block mb-2 bg-general-colortext-sm font-medium text-gray-900 dark:text-gray-300">Food item</label>
                    <input id="food-item" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="apple" 
                            required
                            onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                    <input id="food-category" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="fruit" 
                            required
                            onChange={(e) => setQuantity(e.target.value)}></input>
                </div>
                {/* <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label> */}
                    {/* <input id="food-description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="still fresh"></input> */}
                    {/* <input datetimepicker class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none" type="text" placeholder="Please select a date" />
                </div> */}
                
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry date / best before</label>
                    <div class="relative">

                        {/* <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div> */}
                        {/* <input datepicker 
                            type="text" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select expiry date"></input> */}
                        <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                            <input type="date"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Select a date"
                            onChange={(e) => setExpiryDate(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                
                <button
                    class="text-white bg-teal-300 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-300 dark:hover:bg-teal-500 dark:focus:ring-teal-700 my-2"
                    onClick={Push}>Add</button>
                <button class="text-rose-900 bg-general-color hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-general-color dark:hover:bg-rose-500 dark:focus:ring-rose-700 my-2">
                    <a href="/myitem">Cancel</a>
                </button>
                

            </form>
            
        </div>

        {/* <script src="https://unpkg.com/flowbite@{{< current_version >}}/dist/datepicker.js"></script> */}

        </>

        
);

}
