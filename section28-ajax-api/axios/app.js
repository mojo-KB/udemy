axios.get('https://docs.rapidapi.com/docs/keys')
    .then(res => {
        console.log(res.data.ticker.price);
    })
    .catch(err => {
        console.log("Error!", err)
    })


const fetchBitcoinPrice = async() => {
    try {
        const res = await axios.get('https://docs.rapidapi.com/docs/keys');
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("error!", e);
    }
}