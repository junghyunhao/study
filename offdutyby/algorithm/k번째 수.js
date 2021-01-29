/*
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 ! 
 !  k번째 수
 */

function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const com = commands[i];
    const sortArr = array.slice(com[0] - 1, com[1]).sort((a, b) => a - b);
    let result = sortArr[com[2] - 1];
    answer.push(result);
  }
  
  return answer;
}