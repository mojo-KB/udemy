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

// insert many using mongoose
// return a promise

Movie.insertMany([
        { title: 'Amlie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' },
    ])
    .then(data => {
        console.log("It's working.")
        console.log(data);
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })