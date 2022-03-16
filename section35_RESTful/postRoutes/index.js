const express = require('express');
const app = express();


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

// GET /comments - list all comments
// POST /comments - create a new comment