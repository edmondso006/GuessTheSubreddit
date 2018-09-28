import axios from 'axios';

const subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];
export const GET_IMAGE_FROM_SUB = 'GET_IMAGE_FROM_SUB';

export function fetchData(){

    let ran = randomNumber();

    console.log("Called");
    return(dispatch) => {
        return axios.get(`https://www.reddit.com/r/${subreddits[ran]}.json`)
        .then((res) => {
            getRandomImage(dispatch, res.data.data.children);
            //dispatch(GetImageFromSub(res.data.data.childeren));
        })
    }
}


export function getRandomImage(dispatch, posts){
    for(let i=0; i < posts.length; i++){
        if(posts[i].data.domain === 'i.redd.it' || posts[i].data.domain === 'i.imgur.com') {
            let imageURL = posts[i].data.url;
            console.log(imageURL);
            dispatch(GetImageFromSub(imageURL));
            break;
        }
    }
}


export function GetImageFromSub(url){
    return{
        type: 'GET_IMAGE_FROM_SUB',
        imageUrl: url
    }
}




function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
