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

        {props.state.show_music_page===true ? music.map(
          (item) => {
            return <Menucomp item={item} />
          }

        ):''}

        {props.state.show_music_page===false ?menu.map(
          (item) => {
            return <Menucomp item={item} />
          }

        ):''}
      </div>
      {
        props.state.show_music_page===true ?
        <div className="music_list_bottom">
        "Press<span><i class="fa-solid fa-backward"></i></span> to go back"
      </div>
      :''
      }
      
    </div>
  )
}
export default Menu;