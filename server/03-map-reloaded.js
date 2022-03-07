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

const newOrders = orders.map((item) => {
  return { ...item, tax: 0.19 };
});

console.log(newOrders);
console.log(orders);
