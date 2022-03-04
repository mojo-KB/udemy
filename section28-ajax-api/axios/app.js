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

console.log("Hello")
const response = async() => {
    try {
        let data = await axios({
            method: 'GET',
            url: 'https://icanhazdadjoke.com/2',
            headers: {
                'Accept': 'Application/Json'
            }
            //responseType: 'stream'
        })
        console.log(data);
    } catch (e) {
        console.log("Error", e);
    }

}

response();