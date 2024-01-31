const reverseArray = (numbers) => {
  const reversedArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
  }

  return reversedArray;
};

const numbersArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(numbersArray);

console.log("Original array:", numbersArray);
console.log("Reversed array:", reversedArray);
