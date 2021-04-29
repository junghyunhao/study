/**
 * 가운데 글자 가져오기
 * https://programmers.co.kr/learn/courses/30/lessons/12903
 */
function solution(s) {
  const length = s.length;
  const midChar = length / 2;
  let answer;
  if (length % 2 === 0) {
    answer = s.slice(midChar - 1, midChar + 1);
    return answer;
  }
  answer = s.slice(midChar, midChar + 1);
  return answer;
}

solution(s);
