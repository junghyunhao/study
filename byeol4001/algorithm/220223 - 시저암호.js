/*
 * https://programmers.co.kr/learn/courses/30/lessons/12926
 ! 시저 암호

 */

function solution(s, n) {
  let text = s.split("").map((el) => {
    const codeNum = el.charCodeAt(el) + n;
    // 최대 소문자코드(122) | 최소 소문자코드(96)
    // 최대 대문자코드(90) | 최소 대문자코드(64)

    if (codeNum - n === 32) {
      // 공백일때
      return 32;
    } else if (codeNum > 90 && el.charCodeAt(el) <= 90) {
      return codeNum - 90 + 64;
    } else if (codeNum > 122 && el.charCodeAt(el) <= 122) {
      return codeNum - 122 + 96;
    } else return codeNum;
  });
  return String.fromCharCode(...text);
}

// 아스키 코드 변환해서 해당 값의 코드 값들 계산해서 리턴해줬는데, 이전부터 안되었던 이유가 >=로 표기해서였다.
// >=로 하니 해당하는 최소값에서도+를 해버려서 오류가 생기는 문제가 있어서 해결
