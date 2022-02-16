const form = document.querySelector('form');
const product = document.getElementById('product');
const quantity = document.getElementById('qty');
const list = document.getElementById('list');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newitem = document.createElement('li');
    newitem.innerHTML = `${quantity.value} ${product.value}`;
    list.appendChild(newitem);
    product.value = '';
    quantity.value = '';

})