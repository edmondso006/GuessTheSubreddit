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
                                <Typography gutterBottom variant="headline" >
                                    Game Over!
                                </Typography>
                                <Typography gutterBottom variant="subheading" >
                                    Score: {this.props.score}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="large" color="primary" onClick={this.props.reset}>
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