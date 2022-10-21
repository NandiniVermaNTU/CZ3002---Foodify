import React, { useState } from "react";
import "../PagesCSS/Marketplace.css";
import pic1 from "../Images/FoodifyBckgd.jpg";
import Post from "../Components/Post.js";

export default function Marketplace() {
  const [query, setQuery] = useState("");
  return (
    <section>
      {/* Marketplace heading  */}

      <div className="Marketplace-section2">
        <h2 className="Marketplace-heading2">Marketplace</h2>
      </div>

      {/* Marketplace sub heading */}
      <div className="Marketplace-section2">
        <h2 className="Marketplace-heading3">
          One stop solution to sell and buy pre-loved food and contribute
          towards sustainability
        </h2>
      </div>

      {/* Searchbar */}
      <div className="Marketplace-section3">
        <input
          className="Marketplace-searchbar"
          placeholder="    Search food item"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="Marketplace-section4">
        <Post />
      </div>
    </section>
  );
}
