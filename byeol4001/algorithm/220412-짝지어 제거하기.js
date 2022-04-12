/*
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 ! 짝지어 제거하기
 */

function solution(s) {
  let textArr = [];
  for (let i = 0; i < s.length; i++) {
    // 지금현재 글자가 가장 최근에 추가된 textArr과 같지 않으면 push
    if (s[i] != textArr[textArr.length - 1]) {
      textArr.push(s[i]);
      //  같으면 가장 마지막에 있는 textArr의 값 pop
    } else {
      textArr.pop();
    }
  }
  return textArr.length ? 0 : 1;
}
