/**
 * 하샤드 수
 * https://programmers.co.kr/learn/courses/30/lessons/12947
 */
function solution(x) {
  const splitX = String(x).split("");
  const eachNumAdded = splitX.reduce((a, b) => Number(a) + Number(b));
  if (x % eachNumAdded === 0) {
    return true;
  } else return false;
}
