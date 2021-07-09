// https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript

function solution(phone_number) {
  const numLength = phone_number.length;
  
  return '*'.repeat(numLength-4) + phone_number.slice(numLength-4, numLength);
}