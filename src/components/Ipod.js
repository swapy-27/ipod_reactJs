import '../css/Ipod.css';
import React from 'react';
import Navigation from './Navigation';
import Display from './Display';

const Ipod = (props)=>{
    
    return (
        <div className='ipod flex_coloumn'>
            <Display state={props.state} />
            <Navigation handleRotate={props.handleRotate} handleMenuButton={props.handleMenuButton}/>
        </div>
    )
}

export default Ipod;