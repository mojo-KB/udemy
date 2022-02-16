const list = document.querySelectorAll('li');
for (let li of list) {
    li.addEventListener('click', () => {
        li.remove();
    })
}


const form = document.querySelector('#form');
const tweetList = document.querySelector('#tweetList');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username');
    const tweet = document.querySelector('#tweet');
    addTweet(username, tweet);
    username.value = '';
    tweet.value = '';
})


const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username.value);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet.value}`);
    tweetList.append(newTweet);
}

tweetList.addEventListener('click', (e) => {
    // if(e.target.nodename === 'li') {
    //     e.target.remove();
    // }
    e.target.nodeName === 'li' && e.target.remove();
})