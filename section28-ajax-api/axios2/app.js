// this command to move the current line to the first line :0m16
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJoke = async() => {
    const jokeStr = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeStr);
    jokes.append(newLI);
}

const getDadJoke = async() => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/2', config);
        return res.data.joke;
    } catch (e) {
        return `No Jokes founded ${e}`;
    }
}

button.addEventListener('click', e => {
    e.preventDefault();
    addNewJoke();
});