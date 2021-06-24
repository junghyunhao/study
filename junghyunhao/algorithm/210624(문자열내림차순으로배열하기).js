/**
 *
 * 문자열 내림차순으로 배열하기
 * https://programmers.co.kr/learn/courses/30/lessons/12917
 */
function solution(s) {
  const lowerCaseArr = [];
  const upperCaseArr = [];
  for (let char of s) {
    if (char === char.toLowerCase()) {
      lowerCaseArr.push(char);
    } else upperCaseArr.push(char);
  }
  const sortedLowerCase = lowerCaseArr.sort().reverse().join("");
  const sortedUpperCase = upperCaseArr.sort().reverse().join("");
  const answer = sortedLowerCase + sortedUpperCase;
  return answer;
}
