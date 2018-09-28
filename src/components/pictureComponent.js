import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import Image from './test.png';
import './pictureComponent.css';

class PictureComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return(
            <div className="iamgeCard">
                <Card>
                    <CardContent>

                        <CardMedia
                            component="img"
                            className="image"
                            height="350"
                            image={this.props.imageUrl}
                            title="image"
                        />
                        <Typography  variant="headline" component="h2">
                            Guess the SubReddit!
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
        )
    }
}


export default PictureComponent;