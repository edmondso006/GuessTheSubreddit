import React, {Component} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';


class OptionComponent extends Component {

    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            Option
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        )
    }
}

export default OptionComponent;