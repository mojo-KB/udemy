axios({
        method: 'GET',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'Text/Plain'
        }
        //responseType: 'stream'
    })
    .then(function(response) {
        console.log(response);
    });