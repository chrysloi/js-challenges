const filterPrimeNumbers = (numbers) => {
  const primeNumbers = numbers.filter((num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  });

  return primeNumbers;
};

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbersArray = filterPrimeNumbers(numbersArray);

console.log("Original array:", numbersArray);
console.log("Prime numbers array:", primeNumbersArray);
