/**
 *
 * https://programmers.co.kr/learn/courses/30/lessons/12912
 * 두 정수 사이의 합
 * @returns
 */
function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a; i < b + 1; i++) {
      answer += i;
    }
  } else if (a > b) {
    for (let i = b; i < a + 1; i++) {
      answer += i;
    }
  } else {
    return (answer = a);
  }
  return answer;
}
