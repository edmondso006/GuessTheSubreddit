import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';

import './pictureComponent.css';

class PictureComponent extends Component{
    constructor(props){
        super(props);

    }

    render(){
        
        return(
            <div className="imageCard">
            <br />
            <br />
                <Card>
                    <CardContent>
                        <Typography gutterBottom color="textSecondary" variant="h1">
                            Question #{this.props.questionNum}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        className="image"
                        height="350"
                        src={this.props.imageUrl}
                        title="image"                        
                    />
                    
                    {/* <CardActions >
                        <Button size="large" color="primary">
                            Option 1
                        </Button>
                        <Button size="large" color="primary">
                            Option 2
                        </Button>
                        <Button size="large" color="primary">
                            Option 3
                        </Button>
                        <Button size="large" color="primary">
                            Option 4
                        </Button>
                    </CardActions> */}
                </Card>
            </div>
        )
    }
}


export default PictureComponent;