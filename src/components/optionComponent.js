import React, {Component} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './optionComponent.css';

class OptionComponent extends Component {

    constructor(props){
        super(props);
    }

    handleClick = () =>{
        //TODO
        //Get the state from the store and see if the subreddit on this component is 
        //the same as the correct subredit in the state
    }

    render(){
        return(
            <div>
                <Card onClick={this.handleClick}>
                    <CardContent>
                        <Typography variant="headline" component="h2" className="optionText">
                            {this.props.correctSub}
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        )
    }
}

export default OptionComponent;