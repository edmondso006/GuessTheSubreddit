import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';


import NavBar from './components/navbar';
import PictureComponent from './components/pictureComponent';
import OptionComponent from './components/optionComponent';

import { GetSubreddit } from './providers/provider';
class App extends Component {

  constructor(props){
    super(props);
    GetSubreddit();
  }
  render() {
    return (
      <div className="App">
        <NavBar />

        <Grid container spacing={8}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <PictureComponent />
          </Grid>
          <Grid item xs={3}>
          </Grid>
          
        </Grid>

        <Grid container spacing={8}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3}>
            <OptionComponent />
          </Grid>
          <Grid item xs={3}>
            <OptionComponent />
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>

        <Grid container spacing={8}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3}>
            <OptionComponent />
          </Grid>
          <Grid item xs={3}>
            <OptionComponent />
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
        
        
      </div>
    );
  }
}

export default App;
