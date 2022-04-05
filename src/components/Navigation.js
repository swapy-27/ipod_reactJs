import '../css/navigation.css';
import React from 'react';
function handleMenuButton(){
    const menuBar = document.getElementsByClassName('menu_bar');
    if(menuBar[0].classList.contains('non_visible')){
        menuBar[0].classList.remove('non_visible')
    }
    else{
        menuBar[0].classList.add('non_visible')
    }
}
const Navigation = (props) => {

    return(
        <div className='navigation'>

            <div className='circular_navbar'>

                <div className='top_button nav_buttons' onClick={handleMenuButton}>
                    <i class="fa-solid fa-bars"></i>
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
                <div className='inner_circle' >
                    <h2>Select</h2>
                </div>
            </div>


            <button className='rotate_button' onClick={props.handleRotate}>R</button>
        </div>
    )
}

export default Navigation;