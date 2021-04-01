/*
 * https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript
 ! Jaden Casing Strings
 ?  1) Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 ?  2) Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 ?  1)Not Jaden-Cased 를  2)Jaden-Cased처럼 반환
 todo : 문장의 단어들중 첫 글자를 대문자로 바꿔서 반환
 *
 */

String.prototype.toJadenCase = function () {
  const arr = this.split(' ');
  // 매개변수로 들어오는 형태가 아니라 this를 사용해야 적용이 되더라구요
  const result = [];
  arr.forEach((el) => result.push(el[0].toUpperCase().concat(el.slice(1))));
  return result.join(' ');
};

//실행
let str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase();

// 결과
("How Can Mirrors Be Real If Our Eyes Aren't Real");

/* 
? 더 좋은 풀이
* 저는 변수를 만들어 거기에 값들을 할당했지만 아래는 쭉 이어서 사용하더라구요..
* 보기 편하라고 저는 위처럼 썻는데 뭐가 좋은진 잘 모르겠습니다 🥲
*/

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
};
