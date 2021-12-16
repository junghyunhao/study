
/*
 * https://programmers.co.kr/learn/courses/30/lessons/68935
 ! 3진법 뒤집기
 */

 function solution(n) {
  let count = n
  let arr = []

  while (count > 0){
    arr.unshift(count % 3)
    count = parseInt(count / 3)
  }
  
  const result = arr.reduce((acc,el,idx) => {
    //index순서로 지수를 구해 계산하면 뒤집었을때와 같은 값으로 계산이 가능하다
    acc += el * 3**idx
    return acc
  },0 )
  
  return result
}