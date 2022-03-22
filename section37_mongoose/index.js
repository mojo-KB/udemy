const mongoose = require('mongoose');
main().catch(err => {
    console.log("Error!")
    console.log(err)
});

async function main() {
    await console.log("Connected");
    await mongoose.connect('mongodb://localhost:27017/movieApp');
}


// {
//     title: "Amadeus",
//     year: 1986,
//     score: 9.2,
//     rating: 'R',
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});


const Movie = mongoose.model('Movie', movieSchema);

// in nodejs open node
// .load index.js : to load the file
// amadeus.save() : to save the javascript instant to the database


//inside databases
// mongo 
// db.collection.find()

const amadeus = new Movie({
    title: "Amadeus",
    year: 1986,
    score: 9.2,
    rating: 'R'
});