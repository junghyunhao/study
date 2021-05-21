/**
 * 짝수와 홀수
 * https://programmers.co.kr/learn/courses/30/lessons/12937
 */
function solution(num) {
  var answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else answer = "Odd";
  return answer;
}

/**
 * 평균구하기
 * https://programmers.co.kr/learn/courses/30/lessons/12944
 */
function solution(arr) {
  var answer = 0;
  const length = arr.length;
  const arrSum = arr.reduce((a, b) => a + b, 0);
  answer = arrSum / length;
  return answer;
}
