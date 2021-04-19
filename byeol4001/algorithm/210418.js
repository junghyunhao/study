/*
 * https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
 ! 두 정수 사이의 합
 */

function solution(a, b) {
  let midValue = Math.abs(a - b) + 1;
  let min = a < b ? a : b;
  let result = null;
  while (--midValue >= 0) {
    result += min + midValue;
  }
  return result;
}

solution(3, 5); ///12   =>  3 + 4 + 5

/* 
? 더 좋은 풀이
* 아래껀 공식? 처럼 저렇게 값을 구하면 가운데숫자들을 더한 값이 나오더라구요 간단하고 신기해서 가져와봤습니다
*/

function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
