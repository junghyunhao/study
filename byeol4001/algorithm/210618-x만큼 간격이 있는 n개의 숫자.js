/*
 * https://programmers.co.kr/learn/courses/30/lessons/12954
 ! x만큼 간격이 있는 n개의 숫자
 */

function solution(x, n) {
  const result = new Array(n);
  for (let i = 0; i < result.length; i++) {
    result[i] = x * (i + 1);
  }
  return result;
}

/* 
? 더 좋은 풀이
* 그냥 짧아서.. 이렇게 써도 될듯 하다
*/

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
