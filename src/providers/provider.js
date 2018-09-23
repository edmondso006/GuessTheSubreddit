import axios from 'axios';

const subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];

export function GetSubreddit() {
    let ranSub = randomNumber();
    axios.get(`https://www.reddit.com/r/${subreddits[ranSub]}/random.json`).then( (res) => {
        console.log(res);
        
        if(res.data[0].data.children[0].data.domain === 'i.redd.it' || res.data[0].data.children[0].data.domain === 'i.imgur.com'){
            let imageUrl = res.data[0].data.children[0].data.url;
            console.log(imageUrl);
            return imageUrl;
            
        }else{
            GetSubreddit();
        }
        
    }).catch( (err) => {
        console.log(err);
    });
}

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
