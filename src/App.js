import React from 'react'
import './App.css';
import Ipod from './components/Ipod';
import ZingTouch from 'zingtouch';
import db from './firebase'
import { collection, getDocs } from "firebase/firestore";


class App extends React.Component {

  constructor() {
    super();
    this.change_in_angle = 0;
    this.curr_ele = 0;
    this.state = {
      songs: null,
      show_menu_page: true,
      menu_Page: -1,
      music_page: -1,
      show_music_page: false,
      show_play_screen:false,
      menu: ['Games', 'Music', 'Settings', 'CoverFlow'],
      music: ['AllSongs', 'Artists', 'Albums'],
    }
  }

  handleRotateButton() {
    let ipod = document.getElementsByClassName('ipod')[0];


    if (ipod.classList.contains('flex_coloumn')) {
      ipod.classList.replace('flex_coloumn', 'flex_row');
    }
    else {
      ipod.classList.replace('flex_row', 'flex_coloumn');
    }

  }

  handleMenuButton = () => {

    const menuBar = document.getElementsByClassName('menu_bar')[0];
    if (menuBar.classList.contains('non_visible')) {
      menuBar.classList.remove('non_visible')
    }
    else {
      menuBar.classList.add('non_visible')
    }

  }

  handleLeftButton = () => {

    if(this.state.show_play_screen===true){
      this.setState(
        {
          show_play_screen:false
        }
      )
      return;
    }

    //we are cheching if music menu is opened then just close it and next time open normal menu
    if (this.state.show_music_page === true) {

      this.setState(
        {
          show_music_page: false,
          show_menu_page: true
        }
      )
    }
  
  }

  handleSelectButton = () => {
    if (this.state.show_music_page === true) {

      this.setState(
        {
          music_page: this.curr_ele,
        }
      )
      this.handleMenuButton();
      return;
    }
    if (this.curr_ele === 1) {
      this.setState(
        {
          menu_page: this.curr_ele,
          show_music_page: true,
          show_menu_page: false,
        }
      )
      return;
    }
   
    this.setState(
      {
        menu_page: this.curr_ele
      }
    )
    this.handleMenuButton();


  }
  getSongs = async () => {

    const querySnapshot =  (await getDocs(collection(db, "songs"))).docs;

  
    var songs =[]
    querySnapshot.map(
      (doc) => {
        songs.push(doc.data());
        return null;
      }
    ) 
  
    this.setState(
      {
        songs: songs
      }
    )
 
  }

  handleSongClick = () => {
    this.setState(
      {
        show_play_screen:true
      }
    )
  }
  componentDidMount() {
    this.getSongs();
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
  render() {
    return (
      <div className="App">
        <Ipod
          state={this.state}
          curr_ele={this.curr_ele}
          handleSongClick={this.handleSongClick}
          handleRotate={this.handleRotateButton}
          handleMenuButton={this.handleMenuButton}
          handleLeftButton={this.handleLeftButton}
          handleSelectButton={this.handleSelectButton}
        />
      </div>
    );
  }

}

export default App;
