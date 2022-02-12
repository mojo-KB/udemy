"use strict";

var count = 1;

for (var i = 0; i < 190; i++) {
  var pokemon = document.createElement('div');
  var label = document.createElement('span');
  label.innerText = "#".concat(i);
  var container = document.querySelector('#container');
  var newImg = document.createElement('img');
  newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(i + 1, ".png");
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);

  if (count === 9) {
    container.appendChild(document.createElement('br'));
    count = 0;
  }

  count++;
}