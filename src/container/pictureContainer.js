import React from 'react';
import PictureComponent from './../components/pictureComponent';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actions';


class SubRedditCon extends React.Component{

    constructor(props){
        super(props);

        this.props.fetchData();
    }

    render(){
        
        return(
            // <SubRedditComp res={this.props.res} handleClick={this.props.getSubReddit}></SubRedditComp>
            <div>
                <PictureComponent imageUrl={this.props.imageUrl === undefined ? '' : this.props.imageUrl} />
            </div>
        )
    }
}

const mapStateToProps=(state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(SubRedditCon)