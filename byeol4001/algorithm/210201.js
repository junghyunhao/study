/*
 * https://programmers.co.kr/learn/courses/30/lessons/12931
 ! 자릿수 더하기
 */

function solution(n) {
  const arr = n.toString().split('');
  let result = null;
  arr.map((el) => (result += parseInt(el)));
  return result;
}

/* 
? 더 좋은 풀이
*/

return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
