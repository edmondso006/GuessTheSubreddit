import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';


import NavBar from './components/navbar';
import OptionComponent from './components/optionComponent';
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
