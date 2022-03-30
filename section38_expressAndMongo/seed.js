const Product = require('./models/product');
const mongoose = require('mongoose');

main().catch(err => {
    console.log("Error!")
    console.log(err)
});

async function main() {
    await console.log("Connected");
    await mongoose.connect('mongodb://localhost:27017/farmStand');
}

// const p = new Product({
//     name: "Ruby Grapefruit",
//     price: 2.99,
//     category: 'fruit'
// })

const seed = [{
        name: 'Ruby Grapefruit',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'fruit'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seed)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })


// p.save()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })