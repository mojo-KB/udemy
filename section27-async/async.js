const sing = async() => {
    throw "Oh no, problems"
    return 'LA LA LA';
}

sing()
    .then(data => {
        console.log("Promise Resolved with: ", data)
    })
    .catch(err => {
        console.log("Oh no, promise rejected")
        console.log(err);
    })


const login = async(username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'hash') return 'Welcome'
    throw 'Invalid password'
}


login('passwordhash')
    .then(msg => {
        console.log('Logged in');
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!");
        console.log(err);
    })