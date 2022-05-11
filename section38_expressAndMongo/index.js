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
app.use(express.urlencoded({
    extended: true
}))



app.get('/products', async(req, res) => {
    const product = await Product.find({});
    //console.log(products);
    // res.send("Succesfully connecting to database");
    res.render('products/index', { product });
})

app.get('/products/new', async(req, res) => {
    res.render('products/new.ejs');
})

app.post('/products', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);

    //console.log(req.body)
    //res.send("Adding your product");

    res.redirect(`/products/${newProduct._id}`)
})



// adding CRUD features to the web app
app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show.ejs', { product });
    //res.send('details page!');
})



app.listen(8080, () => {
    console.log("Listening on port 8080");
})