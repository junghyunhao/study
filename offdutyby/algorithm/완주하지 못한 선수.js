/*
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 ! completion의 길이는 participant의 길이보다 1 작습니다.
 !  완주하지 못한 선수
 */

function solution(participant, completion) {
  let answer = '';

  participant.sort();
  completion.sort();

  for(let i in completion){
    if(participant[i] !== completion[i]){
      answer = participant[i]
      return answer;
    }
  }
}