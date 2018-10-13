import React from 'react';
import PictureComponent from './../components/pictureComponent';
import OptionComponent from './../components/optionComponent';
import GameOverComponent from './../components/gameOverComponent';
import StartGameComponent from './../components/startGameComponent';
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

    checkGameOver = () => {
        if(this.props.question === 3) {
            this.props.GameOver();
        }else {
            //Load next question
            this.props.fetchData();
        }
    }

    handleClick = (guess) => {
        //check to see what the next question number is
        //check to make sure the game shouldn't be over
        //Check to make sure the answer is correct or not

        if(guess === this.props.correctSub){
            this.props.AddPoint();
            //Show the next question
            alert('correct');
            this.props.NextQuestion();
            this.checkGameOver();
        }else {
            alert('incorrect. Answer is : ' + this.props.correctSub);
            this.props.NextQuestion();
            this.checkGameOver();
        }
    }

    render(){
        return(
            <div>
                {/*Start Game component*/}
                {this.props.startGame === false ? <StartGameComponent StartGame={this.props.StartGame}/> : null}

                {/* Currently Playing the game */}
                {this.props.startGame === true && this.props.gameOver !== true ? (
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
                ): null}

                 {/* Game over component */}
                 {this.props.gameOver === true ? (<GameOverComponent score={this.props.score}/>) : ''}
                 
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(SubRedditCon)