const items = [1, 15, 3, 4, 3, 10, 20, 15, 25];

const rangosObj = items.reduce(
  (obj, item) => {
    if (item > 0 && item <= 5) {
      obj["1-5"] += 1;
    } else if (item > 5 && item <= 20) {
      obj["6-20"] += 1;
    } else if (item > 20 && item <= 30) {
      obj["21-30"] += 1;
    }
    return obj;
  },
  { "1-5": 0, "6-20": 0, "21-30": 0 }
);

const repeatObj = items.reduce((obj, item) => {
  console.log(obj);
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }
  return obj;
}, {});

console.log(rangosObj);
console.log(repeatObj);
