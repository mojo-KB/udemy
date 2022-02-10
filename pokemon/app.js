let count = 1;
for (let i = 0; i < 190; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const container = document.querySelector('#container');
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);


    if (count === 9) {
        container.appendChild(document.createElement('br'));
        count = 0
    }
    count++;
}