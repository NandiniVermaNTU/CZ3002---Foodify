import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Post from "../Components/Post.js";
import "../PagesCSS/Marketplace.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import PAY from "../Images/pay(new).jpg";
import ENDCHAT from "../Images/endchatnew.jpg";
import SEND from "../Images/send.png";

import db from '../firebase/firebase';
import { auth } from "../firebase/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs,  addDoc, where, deleteDoc, doc } from "firebase/firestore";

function Chat() {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const [show, setShow] = useState(false);
    const [delItem, setDelItem] = useState("");
    const [delPostID, setDelPostID] = useState("");
    const [delItemID, setDelItemID] = useState("");

    const [delSellerEmail, setDelSellerEmail] = useState("")
    // console.log(searchParams.get("foodItem"));
   
    useEffect(() => {
      console.log(delItem);
      console.log(delSellerEmail);
      handleDelete();
    }, [show]);

    // const handleDelete2 = () => {
    //   var deleteItem = db.collection('posts').where('job_id','==',post.job_id);
    //   jobskill_query.get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       doc.ref.delete();
    //     });
    //   });
    // }

    const handleDelete = async () => {
      console.log("in handledelete");
      
      // setDelPostID(doc1.docs[0].id);
      // console.log("delPostID", delPostID);
      // console.log("dataid:", delPostID);

      const q2 = query(collection(db, "food-items"), where("name", "==", delItem), where("userEmail", "==", delSellerEmail));
      const doc2 = await getDocs(q2);
      // setDelItemID(doc2.docs[0].id);
      const q1 = query(collection(db, "posts"), where("foodItemName", "==", delItem), where("sellerEmail", "==", delSellerEmail));
      const doc1 = await getDocs(q1);
      // const data1 = doc.docs[0].data();
      // console.log(doc1.docs[0].id);
      

      console.log("delItemID=", doc2.docs[0].id)
      deleteDoc(doc(db, "food-items", doc2.docs[0].id))
      .then(() => {
          console.log("Item delted, item id=", doc2.docs[0].id)
      })
      .catch(error => {
          console.log(error);
      });

      console.log("delPostID=", doc1.docs[0].id);
      try {
        deleteDoc(doc(db, "post", doc1.docs[0].id))
        // db.collection("posts").document(doc1.docs[0].id)
      .then(() => {
          console.log("Post deleted. postID=", doc1.docs[0].id);
      })
      } catch (err) {
        console.error(err);
        alert(err.message);
      }

      
      
      // deletePost();
      // deleteItem();
    }

    // const deletePost = () => { 
    //   console.log("delPostID=", delPostID);
    //   deleteDoc(doc(db, "post", delPostID))
    //   .then(() => {
    //       console.log("Post deleted. postID=", delPostID)
    //   })
    //   .catch(error => {
    //       console.log(error);
    //   });
    // }

    // const deleteItem = () => { 
    //   console.log("delItemID=", delItemID)
    //   deleteDoc(doc(db, "food-items", delItemID))
    //   .then(() => {
    //       console.log("Item delted, item id=", delItemID)
    //   })
    //   .catch(error => {
    //       console.log(error);
    //   });
    // }

    // const deleteAction = async (col, docid) => {
    //   await deleteDoc(doc(db, col, docid));
    // }

    // const q = query(collection(db, "posts"), where("foodItemName", "==", delItem), where("sellerEmail", "==", delSellerEmail));
      // console.log(q)
      // const doc = await getDocs(q);
      // deleteDoc(doc)
      //   .then(() => {
      //       console.log("Entire Document has been deleted successfully.")
      //   })
      //   .catch(error => {
      //       console.log(error);
      //   })

    return (
    <section>
      <Layout/>
     {/* Item-Price heading */}
      {/* <div class="flex items-center text-center pt-3 pb-2 pl-12 ml-5">
        <div class="flex items-center text-4xl font-semibold text-black-800 md:text-2xl">
           Item - Price 
        </div>
      </div> */}

    
      {/* <div class="flex pt-1 pb-10 pl-1.5">
        <div className="Post-section1">
            <h1 className="Post-heading1"> Item: {searchParams.get("foodItemQuantity") {searchParams.get("foodItem")}</h1>
            <h1 className="Post-heading1"> Price: {searchParams.get("price")}</h1>
            <h1 className="Post-heading1"> Expiry: {searchParams.get("foodItemExpiryDate")}</h1>
            <h1 className="Post-heading1"> Opened/Unopened: {{searchParams.get("foodItem")}</h1>
            <h1 className="Post-heading1"> Description: </h1>
            <h1 className="Post-heading1"> Image: </h1>
        </div>
      </div> */}

        <div class="w-full px-5 pt-5 item-center">
                <div class="rounded-lg ">
                    <table class="w-full border border-gray-200">
                        <tbody>  
                                <div class="bg-lime-100">
                                  <p class="px-5 py-2 font-semibold text-gray-600 dark:text-white text-center">Item Info</p>
                                </div>
                                <tr tabindex="0" class="focus:outline-none flex-auto bg-yellow-50">
                                    
                                    <td>
                                        <p class="px-5 pt-5 text-gray-800 dark:text-white"><span class="font-semibold">Item: </span> {searchParams.get("foodItemQuantity")} {searchParams.get("foodItem")}</p>
                                        <p class="px-5 pt-1 text-gray-800 dark:text-white"><span class="font-semibold">Expiry: </span> {searchParams.get("foodItemExpiryDate")}</p>
                                        <p class="px-5 pt-1 text-gray-800 dark:text-white"><span class="font-semibold">Price: </span> {searchParams.get("price")}</p>
                                        <p class="px-5 pt-1 text-gray-800 dark:text-white"><span class="font-semibold">Status: </span> {searchParams.get("status")}</p>
                                        <p class="px-5 pt-1 pb-5 text-gray-800 dark:text-white"><span class="font-semibold">Description: </span> {searchParams.get("description")}</p>
                                      
                                    </td>
                                </tr>                            
                        </tbody>
                    </table>

                    <div class="flex justify-center lg:justify-start px-5 pt-10 pb-2 italic">Contact seller now</div>
                    <table class="w-full border border-gray-200">
                        <tbody>  
                                <div class="bg-teal-100">
                                  <p class="px-5 py-2 font-semibold text-gray-600 dark:text-white text-center">Seller Info</p>
                                </div>
                                <tr tabindex="1" class="focus:outline-none flex-auto bg-teal-50 pt-10">
                                    
                                    <td>
                                        <p class="px-5 pt-5 text-gray-800 dark:text-white"><span class="font-semibold">Seller Name: </span> {searchParams.get("sellerName")}</p>
                                        <p class="px-5 pt-1 text-gray-800 dark:text-white"><span class="font-semibold">Seller Email: </span> <span class="text-blue-800 italic">{searchParams.get("sellerEmail")} </span></p>
                                        <p class="px-5 pt-1 pb-5 text-gray-800 dark:text-white"><span class="font-semibold">Seller Phone: </span> <span class="text-blue-800 italic">{searchParams.get("sellerPhone")}</span></p>
                                      
                                    </td>
                                </tr> 
                        </tbody>
                    </table>
                </div>
          </div>

          <div class="flex justify-center lg:justify-start mt-10">
            {
              !show &&
              <>
              <div class="mx-7 px-5 py-3 rounded-2xl bg-teal-700 text-white text-sm font-semibold rounded hover:bg-teal-500" id="my-modal">
                <button onClick={() => {
                  setDelItem(searchParams.get("foodItem"));
                  setDelSellerEmail(searchParams.get("sellerEmail"));
                  setShow(true);
                  console.log(show);
                  console.log(delItem);
                  console.log(delSellerEmail);
                  // deleteItem();
                }}>Pay</button></div>
              <div class="mx-7 px-5 py-3 rounded-2xl bg-red-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-200"><a href="/marketplace">End</a></div>
              </>
            }
              
          </div>

        <div class="pt-10">
          {
            show && 
            <>
            <div class="transition delay-1500 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
              <p class="font-bold  delay-5000">Payment successful</p>
              <p class="text-sm  delay-10000">Thank you! payment successful</p>
            </div>
            {/* <div class="mx-auto px-5 py-3 rounded-2xl bg-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-200 items-center"><a href="/marketplace">Go back marketplace</a></div> */}
            </>
          }
        </div>
            


      {/* <div class="flex mt-9 mb-5">
        <input 
              id="message"
              type="text"
              class="ml-2 mr-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Send message"
            ></input>
          <img
            class="flex mr-1"
            width="50" 
            src={SEND}
            alt="PAY-icon"
          />  
        </div>   */}

      {/* <div class="flex ml-7 mt-10">
        <button>
          <nav>
          <ul>
            <li class="flex"> <a href="/"> 
            <img
            class="flex"
            width="110" 
            src={PAY}
            alt="PAY-icon"
          />
          </a></li>
          </ul>
          </nav>
          </button>
          <button class="flex ml-10">
          <nav>
          <ul>
            <li class="flex"> <a href="/Marketplace"> 
            <img
            class="flex"
            width="110" 
            src={ENDCHAT}
            alt="PAY-icon"
          />
          </a></li>
          </ul>
          </nav>
          </button>
      </div> */}

    </section>

    );
  }
  
  export default Chat;  