import React from 'react'
import './App.css';
import Ipod from './components/Ipod';
import ZingTouch from 'zingtouch';
class App extends React.Component {

  constructor() {
    super();
    this.change_in_angle =Number(0) ;
    this.state = {

      menu: ['Games', 'Music', 'Settings', 'CoverFlow'],
      music: ['AllSongs', 'Artists', 'Albums']
    }
  }
  handleRotateButton() {
    let ipod = document.getElementsByClassName('ipod');


    if (ipod[0].classList.contains('flex_coloumn')) {
      ipod[0].classList.replace('flex_coloumn', 'flex_row');
    }
    else {
      ipod[0].classList.replace('flex_row', 'flex_coloumn');
    }

  }

   handleMenuButton(){
    const menuBar = document.getElementsByClassName('menu_bar');
    if(menuBar[0].classList.contains('non_visible')){
        menuBar[0].classList.remove('non_visible')
    }
    else{
        menuBar[0].classList.add('non_visible')
    }
}
  componentDidMount() {
    var containerElement = document.getElementsByClassName('circular_navbar')[0];
    var activeRegion = ZingTouch.Region(containerElement);
    activeRegion.bind(containerElement, 'rotate',  (event) => {
      event.preventDefault();
      let dist = Math.floor(event.detail.distanceFromLast);
      this.change_in_angle += dist;
      if (this.change_in_angle > 60) {
        console.log('hey')
        this.change_in_angle = 0;
      }
      else if (this.change_in_angle < -60) {
        
        this.change_in_angle = 0;
      }
    });

  }
  render() {
    return (
      <div className="App">
        <Ipod state={this.state} handleRotate={this.handleRotateButton} handleMenuButton={this.handleMenuButton} />
      </div>
    );
  }

}

export default App;
