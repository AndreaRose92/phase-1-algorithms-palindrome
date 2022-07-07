function isPalindrome(word) {
  const inverseWordArray = [...word].reverse()
  const inverseWord = inverseWordArray.join('')

  if (word === inverseWord) {return true} else {return false}

}

/* 
  input word => array
  array => flipped array
  if array === flipped array, yay!
*/

/*
Taking the inputted string and breaking it into an array of letters allows it to be manipulated and reversed.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
