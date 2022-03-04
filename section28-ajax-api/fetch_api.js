// bitcoin api: https://api.cryptonator.com/api/ticker/btc-usd

fetch('https://swapi.dev/api/people/1/', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Responsed', response)
        return response.json()
    })
    .then(data => {
        console.log("Data parsed...", data)
    })
    .catch(e => {
        console.log("Error!", e)
    })



<<<<<<< Updated upstream
fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        headers: {
            'Accept': 'Application/json'
        }
    })
    .then(Respone => {
        console.log("Accepted", Respone)
        return Respone.json();
    })
    .then(data => {
        console.log("Data parsed...", data)
    })
    .catch(e => {
        console.log("Error!", e)
    })


=======
const loadJoke = async() => {
    const request = await fetch('https://icanhazdadjoke.com/', {
        method: "GET",
        // header: {
        //     'Accept': "application/json"
        // }
    });

    const data = await request.json();
    console.log(data);
}

loadJoke();
>>>>>>> Stashed changes

// create a fetch function

// const fetchBitcoin = async() => {
//     try {
//         const response = await fetch("https://docs.rapidapi.com/docs/keys")
//         const data = await response.json();
//         console.log(data.ticker.price);
//     } catch (e) {
//         console.log("Error", e);
//     }
// }