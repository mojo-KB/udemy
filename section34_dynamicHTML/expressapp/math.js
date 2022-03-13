const contentDisposition = require("content-disposition");

const areaSide = (r, h) => {
    return 2 * Math.PI * r * h;
}

const areaTop = (r) => {
    return Math.PI * r * r;
} 

const radius = 3.29;
const height = 8.82;

let minimumCost = areaSide(radius, height) * 0.03 + areaTop(radius) * 0.08;

console.log(minimumCost);