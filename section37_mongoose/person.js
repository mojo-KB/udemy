// Setting up mongoose connection
const mongoose = require('mongoose');
main().catch(err => {
    console.log("Error!")
    console.log(err)
});

async function main() {
    await console.log("Connected");
    await mongoose.connect('mongodb://localhost:27017/shopApp');
}

// Creating Schema
const personSchema = new mongoose.Schema({
    first: {
        type: String
    },
    last: {
        type: String
    }
})

// Creating Mongoose Virtuals
personSchema.virtual("fullName")
    .get(function() {
        return `${this.first} ${this.last}`
    })
    .set(function(v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ') + 1);
    });





// Defining Mongoose Middleware
personSchema.pre('save', async function() {
    this.first = 'Yep';
    this.last = 'Sy';
    console.log("About to save");
})

personSchema.post('save', async function() {
    console.log("Saved!");
})

// Creating model
const Person = mongoose.model('Person', personSchema);




const k = new Person({ first: "Kristen", last: "Sun" });
k.save();



const tammy = new Person({ first: "Tammy", last: "Chow" })
tammy.save();

console.log(tammy.fullName);