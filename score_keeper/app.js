const h1 = document.querySelector('h1');

h1.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Hello, world');
})