// function isPalindrome(word) {
//   // Write your algorithm here
// }

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;






function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  const cleanedWord = word.toLowerCase();
  
  // Reverse the string and compare with the original
  const reversedWord = cleanedWord.split('').reverse().join('');
  
  // Check if the original and reversed strings are the same
  const result = cleanedWord === reversedWord;

  return result; // Return the result of the comparison
}

/* 
  Pseudocode:
  - Convert the input word to lowercase (to make it case-insensitive)
  - Reverse the characters of the word
  - Compare the original word with the reversed word
  - If they are the same, return true (it's a palindrome), otherwise return false
*/

/*
  Written explanation of the solution:
  The function takes a word as input, converts it to lowercase, reverses it, and checks if the reversed word is the same as the original word. If they match, the function returns true, indicating that the word is a palindrome; otherwise, it returns false.

  Example:
  isPalindrome("racecar"); // true
  isPalindrome("robot");   // false
*/

// Custom tests
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

