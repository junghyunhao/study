/*
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 ! completion의 길이는 participant의 길이보다 1 작습니다.
 !  완주하지 못한 선수
 */

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  // - 두 배열을 비교 하기 전에 정렬
  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  //  - 2 정렬된 배열 중에 다른 값이 나오면 그 사람이 완주하지 못한 사람이므로 그 값을 return
}
