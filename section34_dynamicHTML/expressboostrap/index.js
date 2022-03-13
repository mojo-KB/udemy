const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

//console.log(redditData);

app.use(express.static(path.join(__dirname, 'public')));




app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));




app.get('/', (req, res) => {
    // routing on / 
    // it will render home.ejs
    res.render('home.ejs');
})



app.get('/r/:subreddit', (req, res) => {
    // routing on /r and set the parameters that are started with :
    // :subreddit will render the variable subreddit

    const { subreddit } = req.params;
    const data = redditData[subreddit];
    console.log(data);
    if (data) { 
    res.render('subreddit', { ...data});
    } else {
        res.render('not found ', {subreddit});
    }


    res.render('random', { rand: num});
})














app.listen(8000, () => {
    // adding listening port on 8000
    // after compiling nodemon index.js
    // you will see the result in localhost:8000

    console.log("Listening on port 8000");
})