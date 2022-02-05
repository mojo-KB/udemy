const arr = [1, 2, 3, 4, 5, 6]

function sum(inputArr) {
    let total = 0;
    for (let i of inputArr)
        total += i;
    return total;
}

const total = arr.reduce((total, i) => total + i);