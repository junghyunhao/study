/*
 * https://programmers.co.kr/learn/courses/30/lessons/12906
 ! 같은 숫자는 싫어
 */

function solution(arr) {
  const arrs = [];
  let idx = -1;
  while (++idx < arr.length) {
    arr[idx] === arr[idx - 1] ? '' : arrs.push(arr[idx]);
  }
  return arrs;
}

solution([1, 1, 3, 3, 0, 1, 1]); ///[1,3,0,1]

/* 
! while문이 아니라 for..in문에 삼항연산자(어쨋든 얘도 for문이지만) 넣었을때는 효율성에서 까였는데
! lodash에서 배운대로 while문을 사용하니 효율성통과 후 4점이나 받았네요 로다쉬 짱짱😂

? 더 좋은 풀이
* filter로 현재 배열의 요소와 인덱스를 받아 현재 요소와 그 앞의 요소가 같지않다면 true에 해당되므로 그런 요소들만 받아서 반환한다.
*/

function solution(arr) {
  return arr.filter((el, idx) => el !== arr[idx - 1]);
}
