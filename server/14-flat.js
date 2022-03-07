const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const newArray = [];
const flatFor = function (newMatriz) {
  for (let i = 0; i < newMatriz.length; i++) {
    element = newMatriz[i];

    if (Array.isArray(element)) {
      flatFor(element);
    } else {
      newArray.push(element);
    }
  }
};
flatFor(matriz);
console.log(newArray);

const flatFunction = matriz.flat();
console.log(flatFunction);

// para 3 niveles de profundidad
const flatNivlesFunction = matriz.flat(3);
console.log(flatNivlesFunction);
