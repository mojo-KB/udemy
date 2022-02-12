"use strict";

var button = document.querySelector('button');
var h1 = document.querySelector('h1');
button.addEventListener('click', function () {
  var newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

var randomColor = function randomColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};