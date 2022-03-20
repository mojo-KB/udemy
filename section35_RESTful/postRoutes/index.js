const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



const comments = [
    {
        username: "Bunla",
        comment: "Lol that is so funny"
    },
    {
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        username: "Sk8erBoi",
        comment: "Please detete yoru account, Todd"
    },
    {
        username: "onlysayswolf",
        comment: "woof woof woof"
    }

]


app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render()
})

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response");
})

app.post('/tacos', (req, res) => {
    res.send("Post request")
})
app.listen(8000, () => {
    console.log("Listening on port 8000");
})



// File Structure of CRUD
// with http verbs

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - get one comment using ID
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - delete one comment
