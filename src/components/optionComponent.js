import React, {Component} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

import './optionComponent.css';

class OptionComponent extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Card onClick={this.props.onClick}>
                    <CardContent>
                        <Typography variant="headline" component="h2" className="optionText">
                            {/* Need to refactor this */}
                            {this.props.correctSub}
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        )
    }
}

export default OptionComponent;