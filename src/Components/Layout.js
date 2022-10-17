import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Sidebar from "./Sidebar";
import "../ComponentsCSS/SideMenu.css";
import "../ComponentsCSS/Layout.css";
import "../PagesCSS/Home.css";
import pic1 from "../Images/FoodifyBckgd.jpg";

import logo from "../Images/FoodifyLogo.png";

export default function Layout({ preview, children }) {
  return (
    <>
     {/* <div className="min-h-screen"> */}
        <div >
          <img src={logo} alt="Foodify-Logo" className="logo" />
        </div>
      <div className="min-h-screen">
       {/* <div className="home-section1"> */}
          <img
            class="img-responsive"
            src={pic1}
            alt="Foodify background"
            className="home-img1"
          />
          
          {/* <h1 className="home-heading1">Foodify</h1>
          <p className="home-description1">More food? Share it!</p>
        </div> */}

        <div id="back-to-top-anchor" color="red"></div>
        {/* <Sidebar /> */}
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}