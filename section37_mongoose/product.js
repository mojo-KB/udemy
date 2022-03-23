const mongoose = require('mongoose');
main().catch(err => {
    console.log("Error!")
    console.log(err)
});

async function main() {
    await console.log("Connected");
    await mongoose.connect('mongodb://localhost:27017/shopApp');
}

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['Cycling']
    },


    // nested Schema
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = mongoose.model('Product', productSchema)

const bike = new Product({
    name: "Mountain Bike",
    price: 599,
    categories: ['Outdoor', 'Casual']
})
bike.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.errors.name.properties.message);
    })

console.log('------------------')

Product.findOneAndUpdate({ name: 'Mountain Bike' }, { price: -19 }, { new: true, runValidators: true })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

const bike2 = new Product({
    name: "Mountain Bike",
    price: 599,
    categories: ['Outdoor', 'Casual'],
    size: ["XL"]
})