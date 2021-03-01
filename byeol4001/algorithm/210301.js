/*
 * https://programmers.co.kr/learn/courses/30/lessons/12922
 ! 수박수박수박수박수박수?
 */

function solution(n) {
  let arr = new Array(n);
  let idx = -1;
  while (++idx < arr.length) {
    idx % 2 ? (arr[idx] = '박') : (arr[idx] = '수');
  }
  return arr.join('');
}

solution(4); ///'수박수박'

/* 
? 더 좋은 풀이
* '수박'을 n의 숫자만큼 반복한 뒤, slice로 처음부터 n의 위치까지 잘라서 반환한다
*/

const waterMelon = (n) => '수박'.repeat(n).slice(0, n);
