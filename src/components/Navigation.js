import '../css/navigation.css';
import React from 'react';



const Navigation = (props) => {
    console.log(props)
    return(
       
        <div className='navigation'>

            <div className='circular_navbar' >

                <div className='top_button nav_buttons' onClick={props.handleMenuButton} >
                    <i class="fa-solid fa-bars" ></i>
                </div>
                <div className='left_button nav_buttons'>
                    <i class="fa-solid fa-backward"></i>
                </div>
                <div className='right_button nav_buttons'>
                    <i class="fa-solid fa-forward"></i>
                </div>
                <div className='bottom_button nav_buttons'>
                <i class="fa-solid fa-play"></i>
                <i class="fa-solid fa-pause"></i>
                </div>
                <div className='inner_circle' onClick={props.handleSelectButton} >
                    <h2>Select</h2>
                </div>
            </div>


            <button className='rotate_button' onClick={props.handleRotate}>R</button>
        </div>
    )
}

export default Navigation;