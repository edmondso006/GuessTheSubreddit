import axios from 'axios';

let subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];
export const GET_IMAGE_FROM_SUB = 'GET_IMAGE_FROM_SUB';
export const GET_IMAGE_FROM_SUB_FAIL = 'GET_IMAGE_FROM_SUB_FAIL';

export function fetchData(){
    let ran = randomNumber();
    //TODO get sub reddits from trending api end point

    return(dispatch) => {
        return axios.get(`https://www.reddit.com/r/${subreddits[ran]}/random.json`)
        .then((res) => {
            let post = res.data[0].data.children[0].data;
            if(post.domain === 'i.redd.it' || post.domain === 'i.imgur.com') {
                let imageURL = post.url;
                if(imageURL.split(".")[3] !== 'gifv'){
                    dispatch(GetImage(imageURL))
                }else{
                    return dispatch(fetchData());
                }
            }else {
                return dispatch(fetchData());
            }
        }).catch(err => console.log(err))
    }
}

//TODO: Add gif support
export function GetImage(url){
    return{
        type: 'GET_IMAGE_FROM_SUB',            
        imageUrl: url
    }
}

export function GetImageFromSubFail(error){
    return{
        type: 'GET_IMAGE_FROM_SUB_Fail',
        error
    }
}

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
