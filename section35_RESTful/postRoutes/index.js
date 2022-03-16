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