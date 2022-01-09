// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const sArr = s.split(' ')

  return `${Math.min(...sArr)} ${Math.max(...sArr)}`
}