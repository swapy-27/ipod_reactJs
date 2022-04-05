import React from "react";
import '../css/menu.css'
import Menucomp from "./Menucomp";


const Menu = (props) => {
  const music = props.state.music;
  const menu = props.state.menu;

  return (
    <div className="menu_bar non_visible">
      <div className="menu_header">
        Ipod
      </div>
      <div className="menu_content">
        {menu.map(
          (item) => {
            return <Menucomp item={item} />
          }

        )}
      </div>

    </div>
  )
}
export default Menu;