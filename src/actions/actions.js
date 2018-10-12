import axios from 'axios';

export const GET_IMAGE_FROM_SUB = 'GET_IMAGE_FROM_SUB';
export const GET_IMAGE_FROM_SUB_FAIL = 'GET_IMAGE_FROM_SUB_FAIL';
export const GET_CORRECT_SUB = 'GET_CORRECT_SUB';
export const GET_OPTIONS  = 'GET_OPTIONS';

let subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];

export function fetchData(){
    let ran = randomNumber();
    //TODO get sub reddits from trending api end point

    return(dispatch) => {
        return axios.get(`https://www.reddit.com/r/${subreddits[ran]}/random.json`)
        .then((res) => {
            let post = res.data[0].data.children[0].data;
            console.log(post);
            if(post.domain === 'i.redd.it' || post.domain === 'i.imgur.com') {
                let imageURL = post.url;
                if(imageURL.split(".")[3] !== 'gifv'){
                    dispatch(GetImage(imageURL));
                    dispatch(GetCorrectSub(post.subreddit));
                    dispatch(GetSubredditOptions(post.subreddit));
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

export function GetCorrectSub(subredit){
    return{
        type: 'GET_CORRECT_SUB',
        correctSub: subredit
    }
}



export function GetImageFromSubFail(error){
    return{
        type: 'GET_IMAGE_FROM_SUB_Fail',
        error
    }
}

export function GetSubredditOptions(correctSub){
    let option1Num = randomNumber();
    let option1 = subreddits[option1Num];
    let option2Num = randomNumber();
    let option2 = subreddits[option2Num];
    let option3Num = randomNumber();
    let option3 = subreddits[option3Num];
    let option4Num = randomNumber();
    let option4 = subreddits[option4Num];
    let options = [option1, option2, option3, option4];

    return{
        type: 'GET_OPTIONS',
        options
    }
}   

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
