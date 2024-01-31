function isPalindrome(word) {
  word = word.toLowerCase();

  word = word.replace(/\s/g, "");

  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const wordToCheck = "level";
const result = isPalindrome(wordToCheck);

if (result) console.log(`${wordToCheck} is a palindrome.`);
else console.log(`${wordToCheck} is not a palindrome.`);
