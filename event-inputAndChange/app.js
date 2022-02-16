const inputBox = document.querySelector('input');
const h1 = document.querySelector('h1');
const h1Value = h1.innerText;
// inputBox.addEventListener('change', (e) => {
//     e.preventDefault();
//     alert('hello');
// })

inputBox.addEventListener('input', (e) => {

    if (inputBox.value.length == 0) {
        h1.innerText = h1Value;
    } else {
        h1.innerText = inputBox.value;

    }
})