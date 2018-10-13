import React, {Component} from 'react';
import {Card, CardContent, Typography, Grid, Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import RedditLogo from './../redditLogo.svg';
class StartGameComponent extends Component {

    render(){
        return(
            <div>
                <br />
                <br />
                <Grid container spacing={8}>
                    
                    <Grid item xs={3}>
                    </Grid>
                    
                    <Grid item xs={6}>
                        
                        <Card>
                            <CardContent>
                                <center>
                                    <img src={RedditLogo} height="150px" width="150px"></img>
                                
                                    <br />
                                    <br />
                                    <br />
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Guess The Subreddit!
                                    </Typography>
                                </center>   
                                <Typography component="p">
                                Welcome to the Guess That Subreddit game! The rules are simple. A random image from a random subreddit will appear. Just 
                                Try to guess what subreddit the image is from!
                                </Typography>

                                <br />
                                <br />


                                <center>
                                    <Button size="large" color="primary" variant="contained" onClick={this.props.StartGame}>
                                        Start the Game!
                                    </Button>
                                </center>

                            </CardContent>

                            <CardActions>
                                
                                
                                
                            </CardActions>
                    
                        </Card>

                    </Grid>
                    <Grid item xs={3}>
                       
                    </Grid>
        
                </Grid>
            </div>
        )
    }
}

export default StartGameComponent;