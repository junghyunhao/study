/*
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 ! 2016년
 */

function solution(a, b) {
  const date = new Date(2016, a - 1, b);
  return date.toString().split(' ')[0].toUpperCase();
}

solution(5, 31); ///'TUE'

/* 
? 더 좋은 풀이
*/

function getDayName(a, b) {
  var arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();
  return arr[day];
}
