import '../css/display.css';
import React from 'react';
import Menu from './Menu';
import Game from '../display_components/Games';
import Music from '../display_components/Music';
import CoverFlow from '../display_components/CoverFlow';
import Settings from '../display_components/Settings';
const Display = (props)=>{

    return (
        <div className='display'>
                <div className='menu_container'>
                    
                    <Menu state={props.state}/>
                {props.showPage === props.curr_ele && props.curr_ele === 0 ? <Game  /> : ''}
                {props.showPage === props.curr_ele && props.curr_ele === 2 ? <Settings /> : ''}
                {props.showPage === props.curr_ele && props.curr_ele === 3 ? <CoverFlow /> : ''}
                {props.showPage === props.curr_ele && props.curr_ele === 1 ? <Music /> : ''}
                </div>

        </div>
    )
}

export default Display;