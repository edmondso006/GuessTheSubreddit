import axios from 'axios';

let subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];
export const GET_IMAGE_FROM_SUB = 'GET_IMAGE_FROM_SUB';
export const GET_IMAGE_FROM_SUB_FAIL = 'GET_IMAGE_FROM_SUB_FAIL';

export function fetchData(){
    console.log("Called");
    let ran = randomNumber();
    //TODO get sub reddits from trending api end point

    return(dispatch) => {
        return axios.get(`https://www.reddit.com/r/${subreddits[ran]}/random.json`)
        .then((res) => {
            console.log(res);
                getRandomImage(dispatch, res.data[0].data.children)
            }).catch(err => console.log(err))
    }
}

//TODO: Add gif support
export function getRandomImage(dispatch, posts){
    for(let i=0; i < posts.length; i++){
        if(posts[i].data.domain === 'i.redd.it' || posts[i].data.domain === 'i.imgur.com') {
            let imageURL = posts[i].data.url;
            console.log(imageURL.split(".")[3]);
            if(imageURL.split()[3] !== 'gifv'){
                console.log('in if');
                console.log('fetchData');
                dispatch(GetImageFromSubSuccess(imageURL));
            }else{
                console.log(imageURL);
                
            }
        }else {
            console.log('in outter else');
            return fetchData();
        }
    }
}


export function GetImageFromSubSuccess(url){
    return{
        type: 'GET_IMAGE_FROM_SUB',
        imageUrl: url
    }
}

export function GetImageFromSubFail(){
    return{
        type: 'GET_IMAGE_FROM_SUB_Fail'
    }
}

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
