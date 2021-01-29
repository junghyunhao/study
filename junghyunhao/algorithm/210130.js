/**
 * 완주하지 못한 선수
 https://programmers.co.kr/learn/courses/30/lessons/42576
 블로그 포스팅
 
 */
function solution(participant, completion) {
  let answer = "";
  for (let i = 0; i < completion.length; i++) {
    let repetitiveIndex = participant.indexOf(completion[i]);
    participant.splice(repetitiveIndex, 1);
  }
  answer = participant[0];
  return answer;
}

function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    for (let j = 0; j < participant.length; j++) {
      if (completion.includes(participant[j])) {
        participant.shift();
      } else return participant[j];
    }
  }
  return participant;
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
