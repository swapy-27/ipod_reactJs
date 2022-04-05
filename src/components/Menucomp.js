import React from "react";
function handleMenuClick(calledFunction){
    console.log(calledFunction)
}
const  Menucomp =(props)=> {
        return (
            <div className="menu_components" onClick={()=>{handleMenuClick(props.item)}}>
                {props.item}
            </div>

        )
}

export default Menucomp;