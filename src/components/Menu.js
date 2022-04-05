import React from "react";
import '../css/menu.css'
import Menu_comp from "./Menu_comp";


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
            return <Menu_comp item={item} />
          }

        )}
      </div>

    </div>
  )
}
export default Menu