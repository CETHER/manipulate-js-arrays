const letters = ["a", "b", "c"];

/* for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  newLettersArray.push(`${element} !!`);
} */

const newLettersArray = letters.map((element) => `${element} !!`);

console.log(newLettersArray);
