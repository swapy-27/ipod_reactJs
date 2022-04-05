import '../css/display.css';
import React from 'react';
import Menu from './Menu';

const Display = (props)=>{
  
    return (
        <div className='display'>
                <div className='menu_container'>
                    <Menu state={props.state}/>
                </div>
           
        </div>
    )
}

export default Display;