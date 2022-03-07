const numbers = [1, 30, 49, 29, 10, 13];
const players = [
  {
    name: "Roberto",
    age: 11,
  },
  {
    name: "Richi",
    age: 17,
  },
  {
    name: "Carlos",
    age: 15,
  },
];

const lessThan40 = numbers.every((item) => item < 40);

const lessThan18 = players.every((player) => player.age < 18);
/* .map((player) => {
    return player.age;
  }) */

console.log(lessThan18);
