/*
 https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
 ! X랑 O들
 todo x랑 o갯수 파악해서 같으면 true 다르면 false
 */

function XO(str) {
  const string = [...str.toLowerCase()];
  let arrX = string.filter((el) => el == 'x');
  let arrO = string.filter((el) => el == 'o');
  return arrX.length == arrO.length;
}

//실행
XO('xoXooX');

// 결과 (true)

/* 
? 더 좋은 풀이
* split으로 x또는 o로 나눈 배열의 값을 비교하는 방법도 존재
*/

function XO(str) {
  return (
    str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
  );
}
s;

//또는

const XO = (str) => {
  str = str.toLowerCase().split('');
  return (
    str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
  );
};
