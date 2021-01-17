/**
 * https://programmers.co.kr/learn/courses/30/lessons/12912
 * ? 두 정수 사이의 합
 */

function solution(a, b) {
  var answer = 0;

  if(a===b) {
      return a;

  } else if(a>b) {
      for(let i = 0; b+i<=a;i++){
          answer += b+i;
      }
      
  } else {
      for(let i = 0; a+i<=b;i++){
          answer += a+i;
      }
  }

  return answer;
}