import axios from 'axios';

export function getSubReddit(){
    console.log("Called");
    return(dispatch) => {
        return axios.get('https://www.reddit.com/r/aww.json')
        .then((res) => {
            console.log(res);
            dispatch(updateSubreddit(res));
        })
    }
}


export function updateSubreddit(res){
    return{
        type: 'UPDATE_SUB',
        res: res
    }
}
