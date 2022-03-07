const words = ["spray", "limit", "elite", "exuberant"];

const newWords = words.filter((item) => {
  return item.length >= 6;
});

console.log(words);
console.log(newWords);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Richi",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Roberto",
    total: 60,
    delivered: false,
  },
  {
    customerName: "Karen",
    total: 60,
    delivered: false,
  },
  {
    customerName: "Alfredito",
    total: 60,
    delivered: true,
  },
];

/* const newOrders = orders.filter((item) => {
  // true
  return item.delivered;
}); */

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search("Alf"));
