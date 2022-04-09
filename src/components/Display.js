import '../css/display.css';
import React from 'react';
import Menu from './Menu';
import Game from '../display_components/Games';

import CoverFlow from '../display_components/CoverFlow';
import Settings from '../display_components/Settings';
import Allsongs from '../music_components/Allsongs';
import Albums from '../music_components/Albums'
import Artists from '../music_components/Artists'
const Display = (props) => {

    return (
        <div className='display'>
            <div className='menu_container'>

                <Menu state={props.state} />
                {props.state.show_menu_page===true && props.showPage === props.curr_ele && props.curr_ele === 0 ? <Game /> : ''}
                {props.state.show_menu_page===true &&props.showPage === props.curr_ele && props.curr_ele === 2 ? <Settings /> : ''}
                {props.state.show_menu_page===true && props.showPage === props.curr_ele && props.curr_ele === 3 ? <CoverFlow /> : ''}

                {props.state.show_music_page === true && props.state.music_page === props.curr_ele && props.curr_ele === 0 ? <Allsongs songs={props.state.songs} handleSongClick={props.handleSongClick} /> : ''}
                {props.state.show_music_page === true && props.state.music_page === props.curr_ele && props.curr_ele === 2 ? <Albums /> : ''}
                {props.state.show_music_page === true && props.state.music_page === props.curr_ele && props.curr_ele === 1 ? <Artists /> : ''}
            </div>

        </div>
    )
}

export default Display;