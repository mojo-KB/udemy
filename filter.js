const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter(n => n % 2 == 0);

console.log(even);



//

function validUserNames(arr) {
    const newarr = arr.filter(i => i.length < 10);
    return newarr;
}