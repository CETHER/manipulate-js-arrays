const products = [
  { title: "Burger", price: 50 },
  { title: "Hotdog", price: 30 },
  { title: "Pizza", price: 120 },
  { title: "Potatoes", price: 100 },
];

const myProducts = [];

const productIndex = products.findIndex((item) => item.title === "Pizza");

// El elemento que se encuentra, se agrega a otra lista y se elimina de la original
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

/* console.log(products);
console.log(myProducts); */

const products2 = [
  { name: "Burger", price: 50 },
  { name: "Hotdog", price: 30 },
  { name: "Pizza", price: 120 },
  { name: "Potatoes", price: 100 },
];

const update = {
  name: "Pizza",
  changes: {
    price: 150,
    description: "Pepperoni",
  },
};

const product2Index = products2.findIndex((item) => item.name === update.name);

let copyProducts = products2.map((product) => product);

copyProducts[product2Index] = {
  ...copyProducts[product2Index],
  ...update.changes,
};

console.log(product2Index);
console.log("-".repeat(10));
console.log(products2);
console.log("-".repeat(10));
console.log(copyProducts);
