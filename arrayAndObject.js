const formatArray = (arr) => {
  const males = [];
  const females = [];

  for (let i = 0; i < arr.length; i++) {
    const person = arr[i].split(", ");
    const name = person[0];
    const firstName = name.split(" ")[0];
    const age = person[1];
    const gender = person[2];
    const personObj = {};
    personObj[firstName] = { "second-name": name.split(" ")[0], age };
    // console.log(personObj);
    if (gender === "male") males.push(personObj);
    else if (gender === "female") females.push(personObj);
  }
  return { males, females };
};

const array = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21, male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10, male",
  "Patrick wyne, 40, male",
];
const formattedArray = formatArray(array);

console.log("Original array:", array);
console.log("Reversed array:", JSON.stringify(formattedArray, null, 0));
