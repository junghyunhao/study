/*
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
 ! Split Strings
 ?  1) solution('abc') // should return ['ab', 'c_']
 ?  2) solution('abcdef') // should return ['ab', 'cd', 'ef']
 todo : 문장의 문자를 2개씩 잘라 배열로 반환 , 마지막 글자가 한글자면 뒤에 _ 를 붙여서 반환
 *
 */

function solution(text) {
  const length = text.length;
  let result = [];
  if (!length) {
    return [];
  }
  for (let i = 0; i < length; i = i + 2) {
    result.push(text.slice(i, i + 2));
  }
  let last = result[result.length - 1];
  last.length == 1 ? (result[result.length - 1] = last.concat('_')) : '';
  return result;
}

/* 
? 더 좋은 풀이
* 2개씩 자르기 전에 length를 판단해서 뒤에 _ 를 먼저 붙이고 시작
* 그 후에 for문을 돌려 2개씩 잘라서 반환
*/

function solution(str) {
  str = str.length % 2 == 0 ? str : str + '_';
  let a = [];
  for (let i = 0; i < str.length; i += 2) {
    a.push(str[i] + str[i + 1]);
  }
  return a;
}
