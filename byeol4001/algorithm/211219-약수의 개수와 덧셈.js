
/*
 * https://programmers.co.kr/learn/courses/30/lessons/77884
 ! 약수의 개수와 덧셈
 */

 function checkFactor(num){
  let countFactor = 1
  // 1은 무조건 약수이니까 1을 포함해서 계산한다.
  for(let i = 0 ; i < num ; i++){
    if(num%i === 0) countFactor = countFactor + 1
  }
  // 약수가 홀수면 ? 음수로리턴 : 양수로리턴
  return countFactor % 2 ? -num : +num
}

function solution(left, right) {
    let result = 0
    let count = right - left
    while (count >= 0){
      const num = right - count
      result  = result + checkFactor(num)
      count--
    }
  return result
}