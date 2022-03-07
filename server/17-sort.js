const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 1000];
// Asc
numbers.sort((a, b) => a - b);
console.log(numbers);

const products = [
  { title: "Burger", price: 50 },
  { title: "Hotdog", price: 30 },
  { title: "Pizza", price: 120 },
  { title: "Potatoes", price: 100 },
];

products.sort((a, b) => a.price - b.price);

console.log(products);
