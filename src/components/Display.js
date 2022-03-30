import '../css/display.css';
import Menu from '../components/Menu';
import React from 'react';
class Display extends React.Component {
    constructor() {
        super();

        this.state = {
            menu: ['Cover Flow', 'Music', 'Games', 'Settings'],
            music: ['All Songs', 'Artists', 'Albums']
        }

    }



    render() {
        const {menu,music} = this.state;
        return (
            <div className='display'>
                <Menu menu={menu}/>
            </div>
        )
    }
}

export default Display;