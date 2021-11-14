
/*
 * https://programmers.co.kr/learn/courses/30/lessons/86051
 ! 없는 숫자 더하기
 */

function solution(numbers) {
  const result = []
  for ( let i = 0 ;i < 10 ; i++){
    numbers.includes(i) ? '' : result.push(i)
  }
  return result.reduce((ac,cu)=>ac+=cu,0)
}