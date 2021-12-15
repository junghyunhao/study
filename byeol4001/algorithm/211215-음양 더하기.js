
/*
 * https://programmers.co.kr/learn/courses/30/lessons/76501
 ! 음양 더하기
 */
function solution(absolutes, signs) {
  const arr = []
  for(let i in signs){
    signs[i] ? arr.push(absolutes[i]) : arr.push(absolutes[i] * (-1))
  }
  const result = arr.reduce((acc,el) => acc+el,0)
  return result
}



/* 
? 더 짧은 풀이
* for문 돌리지 않고 reduce한번에 처리가 가능하다!
*/
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}