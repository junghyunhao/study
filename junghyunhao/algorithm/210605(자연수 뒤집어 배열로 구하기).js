/**
 *
 * 자연수 뒤집어 배열로 구하기
 * https://programmers.co.kr/learn/courses/30/lessons/12932
 */
function solution(n) {
  let answer = [];
  const stringifyN = n.toString();
  for (let x of stringifyN) {
    answer.unshift(Number(x));
  }
  return answer;
}

// 다른사람 한줄 깔끔 풀이

return n
  .toString()
  .split("")
  .reverse()
  .map((o) => (o = parseInt(o)));
