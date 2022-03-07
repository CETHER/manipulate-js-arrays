const products = [
  { title: "Burger", price: 50 },
  { title: "Hotdog", price: 30 },
  { title: "Pizza", price: 120 },
  { title: "Burguer", price: 100 },
];

// Solo retorna 1 elemento aunque haya otro con diferentes caracteristicas
const meal = products.find((product) => product.title === "Burger");
const mealIndex = products.findIndex((product) => product.title === "Burger");
console.log(meal);
console.log(mealIndex);
