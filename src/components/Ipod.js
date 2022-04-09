import '../css/Ipod.css';
import React from 'react';
import Navigation from './Navigation';
import Display from './Display';

const Ipod = (props)=>{
    
    return (
        <div className='ipod flex_coloumn'>
            <Display state={props.state} curr_ele={props.curr_ele} showPage={props.state.menu_page}/>
            <Navigation 
            handleLeftButton={props.handleLeftButton}
            handleRotate={props.handleRotate} 
            handleMenuButton={props.handleMenuButton} 
            handleSelectButton={props.handleSelectButton}
        />
        </div>
    )
}

export default Ipod;