const tweetForm = document.querySelector("#tweetForm");
const tweetList = document.querySelector("#tweetList")
    // document.querySelectorAll('input')[1] will return the second input

tweetForm.addEventListener('submit', function(e) {
    //const userbane = tweetForm.elements.username.value;
    e.preventDefault();
    const username = document.getElementById('username');
    const tweet = document.getElementById('comment');
    addTweet(username, tweet);

    username.value = '';
    tweet.value = '';
})


const addTweet = (input_username, input_tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(input_username.value);
    newTweet.append(bTag);
    newTweet.append(` - ${input_tweet.value}`);
    tweetList.append(newTweet);

}