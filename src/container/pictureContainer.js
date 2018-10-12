import React from 'react';
import PictureComponent from './../components/pictureComponent';
import OptionComponent from './../components/optionComponent';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actions';
import Grid from '@material-ui/core/Grid';

class SubRedditCon extends React.Component{

    constructor(props){
        super(props);
        this.props.fetchData();
        this.state = {
            usedSubs: []
        }
 
    }

    handleClick = (guess) => {
        if(guess === this.props.correctSub){
            this.props.AddPoint();
            //Show the next question
            alert('correct');
            this.props.NextQuestion();
            this.props.fetchData();

        }else {
            this.props.NextQuestion();
            this.props.fetchData();
        }
    }

    render(){

        if(this.props.question === 6){
            alert('game over score:' + this.props.score);
        }

        return(
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <PictureComponent 
                            imageUrl={this.props.imageUrl === undefined  ? '' : this.props.imageUrl}
                            questionNum = {this.props.question}
                        />

                    </Grid>
                    <Grid item xs={3}>
                         <h2>Current Score:  {this.props.score}</h2>
                    </Grid>
            
                </Grid>

                <Grid container spacing={8}>
                    <Grid item xs={3}>
                    </Grid>

                    <Grid item xs={3}>
                        <OptionComponent
                            correctSub={this.props.options[0]}
                            onClick={this.handleClick.bind(this, this.props.options[0])}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionComponent 
                            correctSub={this.props.options[1]}
                            onClick={this.handleClick.bind(this, this.props.options[1])}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>

                <Grid container spacing={8}>
                    <Grid item xs={3}>
                    </Grid>

                    <Grid item xs={3}>
                        <OptionComponent                             
                            correctSub={this.props.options[2]}
                            onClick={this.handleClick.bind(this, this.props.options[2])}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <OptionComponent                            
                            correctSub={this.props.options[3]}
                            onClick={this.handleClick.bind(this, this.props.options[3])}
                        />
                    </Grid>

                    <Grid item xs={3}>
                    </Grid>
                </Grid> 
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(SubRedditCon)