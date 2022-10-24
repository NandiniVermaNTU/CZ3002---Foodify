import React, { useState, useEffect } from "react"

import Axios from "axios";
import Layout from "../Components/Layout.js";

// const apiKey = "cd8ff5193bbd492ea78b3a1d3f177137";
const apiKey = "7418462201954cc1aa005af58cd840b6";
const baseURL = 'https://api.spoonacular.com';


const Recipe = () => {
    const [recipe, setRecipes] = useState([])
    const [missedIng, setMissIngredient] = useState([])
    const [recipesID, setRecipesID] = useState("")
    const [details, setDetails] = useState({});
    const [stepsInfo, setSteps] = useState([]);
  
    const [ingredients, setIngredients] = useState("")
  
    const fetchRecipes = () => {
      Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=5`).then((res) => {
          console.log(res.data);
          console.log(res.data[0].id)
          setRecipes(res.data)
      })
    }
  
    const fetchRecipesInfo = (id) => {
      Axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false?apiKey=${apiKey}`).then((res) => {
          setRecipes(res.data)
          console.log(res.data)
          setRecipesID(res.data.map((recipe) => recipe.id))
          console.log(recipesID);
      })
    }

    const fetchSteps = (id) => {
        console.log(id)
        Axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`).then((res) => {
            setSteps(res.data)
            console.log(res.data)
            // setstep(res.data.map((recipe) => recipe.id))
            // console.log(recipesID);
        })
        return (
            stepsInfo[0].steps.map(steps => (
                <div>
                    <ul>
                        <li>{steps.step}</li>
                    </ul>
                </div>
            ))
            
        )
      }

    
  
  //   const fetchMissIngredient = (recipe) => {
  //     setMissIngredient(recipe.original);
  //   }

//   const RecipesList = ({Ing}) => {

//     let faveRecipeItems;
//     if (faveRecipes.length > 0) {
//       faveRecipeItems = (
//         <Fragment>
//           {faveRecipes.map((recipe) => (
//             <RecipeCard
//               key={recipe.id}
//               id={recipe.id}
//               title={recipe.title}
//               image={recipe.image}
//               missingIngredients={recipe.missedIngredients}
//             />
//           ))}
//         </Fragment>
//       );
//     }

    const fetchDetails = async () => {
        const resp = await fetch(
        `https://api.spoonacular.com/recipes/${recipesID}/information?apiKey=${apiKey}`
        );
        const data = await resp.json();
        return data;
    };

    useEffect(() => {
        let isMounted = true;

        fetchDetails().then((data) => {
        if (isMounted) setDetails(data);
        });
        return () => {
        isMounted = false;
        };
    }, [recipesID]);

  
    useEffect(() => {
      fetchRecipesInfo();
    }, []);

    // useEffect(() => {
    //     fetchSteps();
    //   }, []);



    


  
  

  return (
    // <div>
    //   <button onClick={fetchData}>Generate recipes</button>
    //   {recipe.length > 0 && ( {recipe}
    //     // <ul>
    //     //   {recipe.map(recipe => (
    //     //     <li key={recipe.title}>{recipe.title}</li>
    //     //   ))}
    //     // </ul>
    //   )}
    // </div>
    
    <div>
        <Layout/>
        <div class="items-center text-center">
            <h2 class="text-3xl font-semibold text-gray-500 md:text-4xl italic py-5"><span class="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-red-400 via-rose-500 to-yellow-400 font-bold italic">Magic</span> Recipes </h2>
        </div>

        <div class="px-5">   

            {/* <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label> */}
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" 
                        id="search" 
                        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Enter ingredients" 
                        required
                        onChange={(event) => {
                            setIngredients(event.target.value);
                        }}>
                        </input>
                <button class="text-white absolute right-2.5 bottom-2.5 bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={fetchRecipes}>
                    Search
                </button>
            </div>
        </div>

        <div class="pt-6 overflow-x-auto">
        {recipe.map(recipe => (
            <div class="w-full px-5 pt-5 item-center">
                <div class="border rounded-lg border pb-6 border-gray-200 dark:border-gray-700 ">
                    <table class="w-full whitespace-nowrap">
                        <tbody>  
                            {/* <li key={recipe.title}> */}
                                {/* {fetchMissIngredient} */}
                                <tr tabindex="0" class="focus:outline-none flex-auto">
                                    <td>
                                        <div class="bg-orange-100">
                                            <p class="px-5 py-5 font-semibold text-gray-600 dark:text-white">{recipe.title}</p>
                                        </div>
                                        
                                        <div class="px-2 py-2">
                                            <img src={recipe.image}></img>
                                        </div>
                                        <p class="px-5 pt-5 font-semibold text-gray-800 dark:text-white underline">Ingredients </p>
                                        <div class="px-5 py-2">
                                            { recipe.usedIngredients.map(ing => (
                                                <ol>
                                                    <li class="flex"> {ing.amount} {ing.unit} {ing.name}</li>
                                                </ol>
                                            ))}
                                            { recipe.missedIngredients.map(ing => (
                                                <ol>
                                                    <li class="flex"> {ing.amount} {ing.unit} {ing.name}</li>
                                                </ol>
                                            ))}
                                            
                                        </div>

                                       
                                        {/* <div class="px-5 py-2"> */}
                                        {/* {
                                            Axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${apiKey}`).then((res) => {
                                                setSteps(res.data)
                                                console.log(res.data)
                                                // setstep(res.data.map((recipe) => recipe.id))
                                                // console.log(recipesID);
                                            }) } */}
                                            {/* {fetchSteps(recipe.id)}
                                        </div>  */}
                                        {/* {stepsInfo.steps.map(steps => (
                                            <div>
                                                <ul>
                                                    <li>{steps.step}</li>
                                                </ul>
                                            </div>
                                            ))
                                        } */}
                                        
                                    </td>
                                </tr>
                            {/* </li> */}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            ))}
        </div>
        





        {/* {recipe.length > 0 && (
      <ul>
        {recipe.map(recipe => (
          <li key={recipe.title}>{recipe.title}</li>
        ))}
      </ul>
        )} */}
  </div>
  )
}

export default Recipe;