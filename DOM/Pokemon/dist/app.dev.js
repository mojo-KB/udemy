"use strict";

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
var container = document.querySelector('#container');
var baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (var i = 1; i <= 151; i++) {
  var pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  var label = document.createElement('span');
  label.innerText = "#".concat(i);
  var newImg = document.createElement('img');
  newImg.src = "".concat(baseURL).concat(i, ".png");
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}