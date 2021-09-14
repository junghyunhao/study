// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const orgStr = str;
  let reversedStr = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  if (orgStr === reversedStr) {
    return true;
  } else return false;


function palindrome(str) {
  const orgStr = str;
  const reversedStr = str.split("").reverse().join("");
  if (orgStr === reversedStr) {
    return true;
  } else return false;
}
