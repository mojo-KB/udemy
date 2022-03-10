const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/rand', (req, res) => {

    res.render('random')
})

app.listen(8000, () => {
    console.log("Listening on port 8000");
})