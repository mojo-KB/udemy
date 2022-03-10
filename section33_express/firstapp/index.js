const express = require('express');

const app = express();
const port = 3000;
console.dir(app);

// app.use((req, res) => {
//     // everytime the request is sent, a messeage log in the terminal
//     console.log("We get a new request");
//     console.dir(req);

// })


// app.get('/', (req, res) => {
//         //res.send('Hello World!')
//         res.send('<h1>Hello World</h1>');
//     })




// /cats => 'meow'
// /dogs => 'woof'
// /




app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit`);

})
app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Browsing the ${subreddit} ${postID} subreddit`);

})


app.get('/cats', (req, res) => {
    console.log("Cat is requested");
    res.send("MEOW");
})


app.get('/dogs', (req, res) => {
    console.log("Dog is requested");
    res.send("WOOF");
})

app.get('/', (req, res) => {
    res.send("This is my homepage");
})

app.post('/', (req, res) => {
    res.send("This is a post request the homepage");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    //console.log(req.query);
    res.send(`<h1>Search results for: ${q} `);
})

app.get('*', (req, res) => {
    res.send("For default route");
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})