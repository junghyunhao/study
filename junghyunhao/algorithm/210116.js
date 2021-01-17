/**
 * ? 수박수박수dddd
 * https://programmers.co.kr/learn/courses/30/lessons/12922
 */

function solution(n) {
  let answer = "";
  for (i = 1; i <= n / 2; i++) {
    answer = answer.concat("수박");
  }
  if (n % 2) {
    answer = answer.concat("수");
  }
  return answer;
}

/**
 모범답안
 */
const waterMelon = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};
