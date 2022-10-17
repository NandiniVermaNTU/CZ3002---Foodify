import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Sidebar from "./Sidebar";
import "../ComponentsCSS/SideMenu.css";
import logo from "../Images/FoodifyLogo.png";

export default function Layout({ preview, children }) {
  return (
    <>
     <div className="min-h-screen">
        <div className="logo">
          <img src={logo} alt="Foodify-Logo" className="logo" />
        </div>
        <div id="back-to-top-anchor" color="red"></div>
        <SideMenu />
        <div>
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}