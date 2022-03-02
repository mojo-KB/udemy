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