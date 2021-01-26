/**
 * 완주하지 못한 선수
 https://programmers.co.kr/learn/courses/30/lessons/42576
 블로그 포스팅
 
 */
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    let repetitiveIndex = participant.indexOf(completion[i]);
    participant.splice(repetitiveIndex, 1);
  }
  return participant[0];
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
