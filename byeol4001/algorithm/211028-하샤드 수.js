
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12947
 ! 하샤드 수
 */

function solution(x) {
  const sum = x.toString().split('').reduce((acc,cu)=>acc+parseInt(cu),0)
  return !(x%sum) ? true : false
}