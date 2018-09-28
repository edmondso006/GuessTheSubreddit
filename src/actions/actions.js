import axios from 'axios';

const subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];
export const GET_IMAGE_FROM_SUB = 'GET_IMAGE_FROM_SUB';

export function fetchData(){

    let ran = randomNumber();

    console.log("Called");
    return(dispatch) => {
        return axios.get(`https://www.reddit.com/r/${subreddits[ran]}/random.json`)
        .then((res) => {
            console.log(res);
            getRandomImage(dispatch, res.data[0].data.children);
            //dispatch(GetImageFromSub(res.data.data.childeren));
        })
    }
}

//TODO: Add gif support
export function getRandomImage(dispatch, posts){
    for(let i=0; i < posts.length; i++){
        if(posts[i].data.domain === 'i.redd.it' || posts[i].data.domain === 'i.imgur.com') {
            let imageURL = posts[i].data.url;
            if(imageURL.split()[1] ==='gifv'){
                break;
            }else{
                console.log(imageURL);
                dispatch(GetImageFromSub(imageURL));
            }
            
            break;
        }else {
            console.log("recursion");
            fetchData();
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
