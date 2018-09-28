import axios from 'axios';

const subreddits = ['aww', 'MadeMeSmile', 'pics', 'wellthatsucks','memes','gaming'];
let url;
export function GetRandomImageURL() {
    let ranSub = randomNumber();
    return axios.get(`https://www.reddit.com/r/${subreddits[ranSub]}/random.json`);
}



function parsePromise(res){
    return new Promise((resolve, reject) => {
        if(res.data[0].data.children[0].data.domain === 'i.redd.it' || res.data[0].data.children[0].data.domain === 'i.imgur.com'){
            let imageUrl = res.data[0].data.children[0].data.url;
            console.log('PROVIDER: IN IF: ' + imageUrl);
            resolve(imageUrl);
        }else{
            GetRandomImageURL();
            
        };
    })
}

function randomNumber(){
    return Math.floor(Math.random() * Math.floor(subreddits.length));
}
