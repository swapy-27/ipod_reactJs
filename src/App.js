import React from 'react'
import './App.css';
import Ipod from './components/Ipod';
import ZingTouch from 'zingtouch';
class App extends React.Component {

  constructor() {
    super();
    this.change_in_angle = Number(0);
    this.curr_ele = 0;
    this.state = {
      showPage:-1,
      menu: ['Games', 'Music', 'Settings', 'CoverFlow'],
      music: ['AllSongs', 'Artists', 'Albums'],
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

  handleMenuButton() {
    const menuBar = document.getElementsByClassName('menu_bar');
    if (menuBar[0].classList.contains('non_visible')) {
      menuBar[0].classList.remove('non_visible')
    }
    else {
      menuBar[0].classList.add('non_visible')
    }
  }
  componentDidMount() {
    var containerElement = document.getElementsByClassName('circular_navbar')[0];
    var activeRegion = ZingTouch.Region(containerElement);
    var next = 0;
    activeRegion.bind(containerElement, 'rotate', (event) => {
      event.preventDefault();
      var menuComp = document.getElementsByClassName('menu_components');
      menuComp[this.curr_ele].classList.add('current_hovering_comp');
      let dist = Math.floor(event.detail.distanceFromLast);
      this.change_in_angle += dist;

      if (this.change_in_angle > 60) {

        if (this.curr_ele < menuComp.length - 1) {
          next = this.curr_ele + 1;
          this.setState(
            () => {
              menuComp[this.curr_ele].classList.remove('current_hovering_comp');

            }
          )
          menuComp[next].classList.add('current_hovering_comp');
        }
        else {
          next = 0;
          this.setState(
            () => {
              menuComp[this.curr_ele].classList.remove('current_hovering_comp');

            }
          )
          menuComp[next].classList.add('current_hovering_comp');

        }
        this.setState(
          () => {

            this.curr_ele = next;
            this.change_in_angle = 0;
          }
        )

      }
      else if (this.change_in_angle < -60) {

        if (this.curr_ele === 0) {

          next = menuComp.length - 1;
        }
        else {
          next = this.curr_ele - 1
        }


        this.setState(
          () => {
            menuComp[this.curr_ele].classList.remove('current_hovering_comp');

          }

        )
        menuComp[next].classList.add('current_hovering_comp');
        this.setState(
          () => {

            this.curr_ele = next;
            this.change_in_angle = 0;
          }
        )
       
      }
    });
}
handleSelectButton= ()=> {
 
  this.setState(
   {
      showPage:this.curr_ele
  }
  )
  this.handleMenuButton();
  
}
render() {
  return (
    <div className="App">
      <Ipod curr_ele={this.curr_ele} showPage={this.state.showPage} state={this.state} handleRotate={this.handleRotateButton} handleMenuButton={this.handleMenuButton} handleSelectButton={this.handleSelectButton}  />
    </div>
  );
}

}

export default App;
