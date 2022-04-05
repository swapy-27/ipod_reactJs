import React from 'react'
import './App.css';
import Ipod from './components/Ipod';

class App extends React.Component {

  constructor() {
    super();

    this.state={
      menu:['Games','Music','Settings','CoverFlow'],
      music:['AllSongs','Artists','Albums']
    }
  }
  handleRotateButton(){
    let ipod = document.getElementsByClassName('ipod');
    

    if(ipod[0].classList.contains('flex_coloumn')){
      ipod[0].classList.replace('flex_coloumn','flex_row');
    }
  else
  {
    ipod[0].classList.replace('flex_row','flex_coloumn');
  }
    

  }
  render() {
    return (
      <div className="App">
        <Ipod state={this.state} handleRotate={this.handleRotateButton}/>
      </div>
    );
  }

}

export default App;
