import axios from 'axios';

export const GET_IMAGE_FROM_SUB = 'GET_IMAGE_FROM_SUB';
export const GET_IMAGE_FROM_SUB_FAIL = 'GET_IMAGE_FROM_SUB_FAIL';
export const GET_CORRECT_SUB = 'GET_CORRECT_SUB';
export const GET_OPTIONS  = 'GET_OPTIONS';
export const ADD_POINT = 'ADD_POINT';
export const NEXT_QUESTION = 'NEXT_QUESTION';

let subreddits = ['aww', 'MadeMeSmile', 'pics', 'Wellthatsucks','memes','gaming'];
let usedSubs = [];

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
    let options = [];
    let correctPlace = Math.floor(Math.random() * Math.floor(4));
    //Need to put the correct sub in the array so we don't get duplicates 
    //of the correct sub
    usedSubs = [correctSub];
    
    let option1 = GetRandomSubreddit();
    let option2 = GetRandomSubreddit();
    let option3 = GetRandomSubreddit();

    //Randomly places the correct subreddit in the options array...
    //There has to be a better way to do this
    if(correctPlace === 0){
        options = [correctSub, option1, option2, option3];
    }else if (correctPlace === 1){
        options = [option1, correctSub, option2, option3];
    }else if(correctPlace === 2 ){
        options = [option1, option2, correctSub, option3];
    }else if (correctPlace === 3){
        options = [option1, option2, option3, correctSub];
    }else{
        console.log('Placement error');
    }

    return{
        type: 'GET_OPTIONS',
        options
    }
}

export function NextQuestion(){
    return {
        type: 'NEXT_QUESTION'
    }
}


export function AddPoint(){
    return{
        type: 'ADD_POINT',
    }
}






//Helper Functions
function GetRandomSubreddit(){
    let ran = Math.floor(Math.random() * Math.floor(subreddits.length));
    let subreddit = subreddits[ran];
    if(usedSubs.includes(subreddit)){
        return GetRandomSubreddit();
    }else{
        usedSubs.push(subreddit);
        return subreddit;
    }
}

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
