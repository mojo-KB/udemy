// some and every return true or false
const n = [1, 2, 3, 4, 5, 6, 7]

hasSomeEven = n.some(i => i % 2 == 0)
allEven = n.every(i => i % 2 == 0)


//function 
const allEvens = (arr) => {
    return arr.every(i => i % 2 === 0);
}