/*
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 !  PermMissingElem
 */

// given an array A, returns the value of the missing element.

function solution(A) {
  let result = 0;
  for (let i = 1; i < A.length + 2; i++) {
    if (!A.includes(i)) {
      result = i;
      break;
    }
  }
  return result;
}
