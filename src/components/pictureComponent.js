import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import Image from './test.png';
import './pictureComponent.css';
import { GetSubreddit } from './../providers/provider';

class PictureCompoent extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        console.log(GetSubreddit());
        return(
            <div className="iamgeCard">
                <Card>
                    <CardContent>

                        <CardMedia
                            component="img"
                            className="image"
                            height="350"
                            image={Image}
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


export default PictureCompoent;