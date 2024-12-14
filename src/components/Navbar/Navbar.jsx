import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {

    const [menu, setMenu] = useState("home")

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu("home")} className={menu==="home" ? "active" : "" }>Home</li>
        <li onClick={()=> setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</li>
        <li onClick={()=> setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={()=> setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket"  />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
