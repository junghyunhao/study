/**
 * 자릿수 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/12931
 * @param {*} n
 */
function solution(n) {
  let answer = 0;
  const stringifyN = String(n);
  for (let x of stringifyN) {
    answer += Number(x);
  }
  return answer;
}
