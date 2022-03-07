const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray1 = elements.concat(otherElements);
const newArray2 = [...elements, ...otherElements];

console.log(newArray1);
console.log(newArray2);
elements.push(...otherElements);
console.log(elements);
