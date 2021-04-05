/*
 * https://programmers.co.kr/learn/courses/30/lessons/12910
 ! 나누어 떨어지는 숫자 배열
 */

function solution(arr, divisor) {
  let index = -1;
  var answer = [];
  while (++index < arr.length) {
    arr[index] % divisor == 0 ? answer.push(arr[index]) : '';
  }
  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}

//실행
solution([5, 9, 7, 10], 5);

// 결과 (5, 10)

/* 
? 더 좋은 풀이
* 저는 왜 자꾸 filter랑 map으로 콜백함수 사용을 응용하지 않고 계속 for문에 while문만 돌리려고 애를 쓰는지 모르겠네요..🥲
*/

function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
