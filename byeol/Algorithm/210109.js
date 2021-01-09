/*
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 ? 완주하지 못한 선수 문제풀이
 ! fsdfsd
 Todo
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  console.log(participant, completion);

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
