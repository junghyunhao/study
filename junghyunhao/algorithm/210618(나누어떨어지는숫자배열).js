/**
 * 
 * 나누어떨어지는 숫자배열 
 * https://programmers.co.kr/learn/courses/30/lessons/12910
 */
function solution(arr, divisor) {
    let answer = [] 
      const mapArr = arr.filter(num => num%divisor===0)
      if(mapArr.length ===0) {
       return answer = [-1]
      }
      answer = mapArr.sort((a,b) => a-b)
    return answer
  }