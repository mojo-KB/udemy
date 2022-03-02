import axios from 'axios';

const axios = require('axios');

axios.get('https://icanhazdadjoke.com/')
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        console.log(e);
    })