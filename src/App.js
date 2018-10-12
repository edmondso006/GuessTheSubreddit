import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar';
import PictureContainer from './container/pictureContainer';

class App extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <NavBar />

        <PictureContainer />

        
        
        
      </div>
    );
  }
}

export default App;
