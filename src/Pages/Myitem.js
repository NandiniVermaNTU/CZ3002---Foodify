import React, { useState, useEffect } from "react";
import {Link, useNavigate, NavLink} from "react-router-dom";
import "../PagesCSS/Home.css";
import "../PagesCSS/Myitem.css";
import Layout from "../Components/Layout";

import db from '../firebase/firebase';
import { auth } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs,  addDoc, where } from "firebase/firestore";

function Myitem() {
    const [foodItems, setFoodItems] = useState(
        [
            {
                "name": "",
                "quanity": "",
                "expiryDate": ""
            }
        ]
    );
    const [name , setName] = useState();
    const [quantity , setQuantity] = useState();
    const [expiryDate , setExpiryDate] = useState();

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userID, setUserID] = useState();

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    // Fetch user data
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setUserName(data.name);
            setUserEmail(data.email);
            setUserID(data.uid);
            // console.log(userName);
            // console.log(userEmail);
            // console.log(userID);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    const fetchItems = async () => {
        try {
            const q = query(collection(db, "food-items"), where("userID", "==", user?.uid));
            const doc = await getDocs(q);
            // console.log("doc", doc.docs.data());
            // const data = doc.docs[0].data();
            // console.log(data.name);
            // console.log(data.email);
            // console.log(data.uid);
            const items = doc.docs;
            let itemDocs = items.map(item => item.data());
            setFoodItems(itemDocs);
            // console.log("itemdoc:", itemDocs);
            // console.log("fooditem", foodItems);
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

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchItems();
        // console.log(userName);
        // console.log(userID);
        // console.log(userEmail);
        // console.log(name);
        // console.log(quantity);
        // console.log(expiryDate);
        console.log(foodItems);
    }, [userName, user, loading]);

    return (
    <div>
        <Layout/>
        <div class="w-full px-8 pt-10 item-center">
            <div class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700 ">
                <div class="flex items-center border-b border-gray-200 dark:border-gray-700  justify-between px-6 py-3">
                    <p tabindex="0" class="focus:outline-none text-sm lg:text-xl font-semibold leading-tight text-gray-800 dark:text-white ">My Food Items</p>
                    <div class="focus:outline-none focus:ring-2  bg-rose-400 focus:ring-rose-700 focus:bg-rose-500 dark:focus:bg-rose-500 flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-rose-100 dark:border-rose-800 ">
                        <a  class="focus:outline-none text-xs md:text-sm leading-none text-white dark:text-gray-200" href='/addfooditem'>+ Add food item</a>
                    </div>
                </div>
                <div class="px-6 pt-6 overflow-x-auto">

                    <table class="w-full whitespace-nowrap">
                        <tbody>
                            {foodItems.length>0? foodItems.map(fooditem => (

                            <tr tabindex="0" class="focus:outline-none flex-auto">
                                <td>
                                    <div class="flex items-center py-5">
                                        {/* <div class="bg-gray-100 dark:bg-gray-800  rounded-sm p-2.5">
                                           <img src="../Images/chicken-icon.jpg" alt="chicken" />
                                        </div> */}
                                        <div class="pl-3">
                                            <div class="flex items-center text-sm leading-none">
                                                <p class="font-semibold text-gray-800 dark:text-white pr-5">{fooditem.quantity} {fooditem.name}</p>
                                                {/* <p class="text-indigo-700 dark:text-indigo-400  ml-3">10/10/2022</p> */}
                                                {/* <div class="flex items-center justify-center py-1 bg-orange-100 rounded-full">
                                                    <p class="text-xs font-semibold leading-none leading-3 text-orange-700 px-5">20/10/2022</p>
                                                </div> */}
                                            </div>
                                            {/* <p class="text-xs md:text-sm leading-none text-gray-600 dark:text-gray-200  mt-2">Description of chickens here</p> */}
                                        </div>
                                    </div>
                                </td>
                                <td class="pl-16">
                                    <div class="flex items-center justify-center py-1 bg-orange-100 rounded-full">
                                        <p class="text-xs font-semibold leading-none leading-3 text-orange-700 px-5">{fooditem.expiryDate}</p>
                                    </div>
                                </td>
                            </tr>
                            )): <></>}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="flex justify-center lg:justify-start mt-10 px-5 italic">Want to make a meal from these items?</div>
        <div class="flex justify-center lg:justify-start mt-5 px-5">
            <a class="px-4 py-3 bg-teal-500 text-white text-sm font-semibold rounded hover:bg-teal-700" href="/recipe">Recipes Recommendation</a>
        </div>



    </div>

  );
}

export default Myitem;
