/**
 *
 * @param {*} s
 * https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascripts
 */
function solution(s) {
  const length = s.length;
  if (length < 1 || length > 8) {
    return false;
  } else if (s.match(/[a-z]/i)) {
    return false;
  }
  const validLength = length === 4 || length === 6;
  const sAllNumber = isNaN(parseFloat(s));
  if (validLength) {
    if (!sAllNumber) {
      return true;
    }
    return false;
  }
  return false;
}

solutions("a234");
