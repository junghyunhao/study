/*
 * https://programmers.co.kr/learn/courses/30/lessons/12930
 ! 이상한 문자 만들기
 */

function solution(s) {
  let arr = s.split(' ').map((el, i) => {
    let a = el.split;
    let maps = el.split('').map((el, i) => {
      return i % 2 == 0 ? el.toUpperCase() : el.toLowerCase();
    });
    return maps.join('');
  });
  return arr.join(' ');
}

solution('hi my name is'); ///'Hi My NaMe Is'

/* 
? 더 좋은 풀이
*/

let solution = (s) =>
  s
    .split(' ')
    .map((el) =>
      el
        .split('')
        .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
        .join('')
    )
    .join(' ');
