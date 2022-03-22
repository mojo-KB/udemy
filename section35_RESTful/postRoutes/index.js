const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(methodOverride('_method'))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



let comments = [
    {
        id: uuidv4(),
        username: "Bunla",
        comment: "Lol that is so funny"
    },
    {
        id: uuidv4(),
        username: "Skyler",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuidv4(),
        username: "Sk8erBoi",
        comment: "Please detete yoru account, Todd"
    },
    {
        id: uuidv4(),
        username: "onlysayswolf",
        comment: "woof woof woof"
    }

]
// File Structure of CRUD
// with http verbs

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - get one comment using ID
// PATCH /comments/:id - update one comment
// DELETE /comments/:id - delete one comment


app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuidv4()});
    console.log(comments)
    //res.send("It worked!");
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(i => i.id === id);
    res.render('comments/show', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    // console.log(req.body.comment)
    res.redirect("/comments")
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    //const foundComment = comments.find(i => i.id === id);
    comments = comments.filter(c => c.id != id);
    res.redirect('/comments');
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



