import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';


import NavBar from './components/navbar';
import PictureComponent from './components/pictureComponent';
import OptionComponent from './components/optionComponent';


class App extends Component {
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
