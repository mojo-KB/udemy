const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
main().catch(err => {
    console.log("Error!")
    console.log(err)
});

async function main() {
    await console.log("Connected");
    await mongoose.connect('mongodb://localhost:27017/farmStand');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async(req, res) => {
    const products = await Product.find({});
    //console.log(products);
    // res.send("Succesfully connecting to database");
    res.render('products/index', { products });
})




app.listen(8080, () => {
    console.log("Listening on port 8080");
})