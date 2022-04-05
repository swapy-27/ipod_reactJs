import React from "react";
function handleMenuClick(calledFunction){
    console.log(calledFunction)
}
const  Menu_comp =(props)=> {
        return (
            <div className="menu_components" onClick={()=>{handleMenuClick(props.item)}}>
                {props.item}
            </div>

        )
}

export default Menu_comp;