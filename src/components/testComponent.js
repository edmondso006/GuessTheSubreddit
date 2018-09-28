import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSubreddit, fetchSubreddit } from './../redux/actions';

class TestComponent extends Component {
    componentDidMount(){
        this.props.dispatch(fetchSubreddit());
    }

    render() {
        const { error, loading, subreddits } = this.props;
        
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading...</div>;
        }
    
        return (
          <ul>
            {subreddits.map(sr =>
              <li >{sr}</li>
            )}
          </ul>
        );
      }
}

const mapStateToProps = state => ({
    subreddits: state.subreddits.items,
    loading: state.subreddits.loading,
    error: state.subreddits.error
  });
  
  export default connect(mapStateToProps)(TestComponent);