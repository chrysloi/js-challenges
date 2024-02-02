const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const customSort = (arr) => {
  arr = arr.filter((num) => !isPrime(num));

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// const inputArray = [23, 5, 8, 2, 13, 17, 4, 11, 19];
const inputArray = [23, 5, 8, 2, 13, 17, 4, 11, 67, 62, 89];
const result = customSort(inputArray);
console.log("Sorted array using custom sort function:", result);
