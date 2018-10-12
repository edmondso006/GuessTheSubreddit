import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
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
                        <Typography  variant="headline" component="h2">
                            Question # {this.props.questionNum}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        className="image"
                        height="350"
                        src={this.props.imageUrl}
                        title="image"                        
                    />
                    
                </Card>
            </div>
        )
    }
}


export default PictureComponent;