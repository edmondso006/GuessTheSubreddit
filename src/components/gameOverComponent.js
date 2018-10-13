import React, {Component} from 'react';
import {Card, CardContent, Typography, Grid, Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';

class GameOverComponent extends Component {

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
                                <Typography gutterBottom variant="h1" component="h1">
                                    Game Over!
                                </Typography>
                                <Typography gutterBottom variant="h3" component="h3">
                                    Score: {this.props.score}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="large" color="primary">
                                    Play Again
                                </Button>
                                <Button size="large" color="primary">
                                    Share
                                </Button>
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

export default GameOverComponent;