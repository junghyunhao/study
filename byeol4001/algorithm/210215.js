/*
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 ! 핸드폰 번호 가리기
 */

function solution(phone_number) {
  const length = phone_number.length;
  const array = new Array(length - 4).fill('*');
  return array.join('') + phone_number.slice(length - 4);
}

solution('01033334444'); // '*******4444'

/* 
? 더 좋은 풀이
* [...n]으로 문자열을 쉽게 배열로 변경 후 fill을 사용하는데 start, end값을 지정했고, 뒤에 4자리만 빼고 *로 바꾸고 join으로 합쳐주었다
*/

const solution = (n) => [...n].fill('*', 0, n.length - 4).join('');
