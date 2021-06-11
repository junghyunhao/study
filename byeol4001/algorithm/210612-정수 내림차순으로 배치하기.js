/*
 * https://programmers.co.kr/learn/courses/30/lessons/12933
 ! 정수 내림차순으로 배치하기
 */

function solution(n) {
  return parseInt(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

/* 
? 더 좋은 풀이
* 문자로 바꾸는것보다 숫자인 상태에서 하는게 속도가 더 빠르다고 한다.
*/

function solution(n) {
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
    //nums에 push되는값은 맨 끝자리수 10으로 나눈 뒤 남은 값이므로
    //그리고 버림으로 10 나눈 값을 n으로 바꿔주면
    //n은 맨 마지막 자리수를 뺀 값이 된다
    //이런식으로 숫자를 문자로 바꾸지않고 배열에 push 한다
  } while (n > 0);
  console.log(nums);

  return nums.sort((a, b) => b - a).join('') * 1;
  // array를 join한 문자를 숫자로 바꾸기 위해서 1을 곱해준다
}
