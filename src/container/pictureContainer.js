import React from 'react';
import PictureComponent from './../components/pictureComponent';
import OptionComponent from './../components/optionComponent';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actions';
import Grid from '@material-ui/core/Grid';
import { Store } from 'react-redux';

class SubRedditCon extends React.Component{

    constructor(props){
        super(props);

        this.props.fetchData();
        
        this.state = {
            usedSubs: []
        }

    }

    getRandomLocation = () => {
    
        return Math.floor(Math.random() * Math.floor(4));
    }

    getRandomSubReddit = () => {
        let subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming']
        let num = Math.floor(Math.random() * Math.floor(subreddits.length));
        console.log(num);
        let subreddit = subreddits[num];
        
        console.log(subreddit);
        console.log(this.state.usedSubs);

        if(this.state.usedSubs.includes(subreddit)){
        }else{
            this.state.usedSubs.push(subreddits[num]);
            return subreddits[num];
        }

    }

    render(){

        return(
            <div>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <PictureComponent 
                            imageUrl={this.props.imageUrl === undefined  ? '' : this.props.imageUrl} 
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
                            correctSub={this.getRandomLocation() === 0 ? this.props.correctSub : this.getRandomSubReddit()}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <OptionComponent 
                            correctSub={this.getRandomLocation() === 1 ? this.props.correctSub : this.getRandomSubReddit()}
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
                            correctSub={this.getRandomLocation() === 2 ? this.props.correctSub : this.getRandomSubReddit()}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <OptionComponent                            
                            correctSub={this.getRandomLocation() === 3 ? this.props.correctSub : this.getRandomSubReddit()}
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