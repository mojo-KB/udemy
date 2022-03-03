axios({
        method: 'GET',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'Application/json'
        }
        //responseType: 'stream'
    })
    .then(function(response) {
        console.log(response);
    });