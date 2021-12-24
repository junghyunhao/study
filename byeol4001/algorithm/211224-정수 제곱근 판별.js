
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12934
 ! 정수 제곱근 판별

 */

function solution(n) {
  const sqrt = Math.sqrt(n)
  return sqrt % 1 ? -1 : (sqrt+1)**2
}