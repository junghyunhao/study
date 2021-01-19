/*
 * https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 ! 가운데 글자 가져오기
 */

function solution(str) {
  const mid = Math.floor(str.length / 2);
  var answer = '';
  str.length % 2 === 1
    ? (answer = str[mid])
    : (answer = str.slice(mid - 1, mid + 1));
  return answer;
}

/* 
? 더 좋은 풀이
*/

function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
