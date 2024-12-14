import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menus</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        veritatis vel quasi laborum culpa esse veniam dolores, consectetur
        debitis et!
      </p>
      <div className="explore-menu-list">
        {
            menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name? "active" : ""} src={item.menu_image} alt="menuimg" />
                        <h5>{item.menu_name}</h5>
                    </div>
                )
            })
        }
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
