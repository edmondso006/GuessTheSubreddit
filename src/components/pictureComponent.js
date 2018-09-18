import React, { Component } from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import Image from './test.png';

class PictureCompoent extends Component{

    render(){
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