/*
 * https://programmers.co.kr/learn/courses/30/lessons/12918
 ! 문자열 다루기 기본
 */

function solution(s) {
  return (s.length == 4 || s.length == 6) && parseInt(s) == s ? true : false;
}

solution('a234'); ///'false'
