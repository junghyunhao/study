
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12985
 ! 예상 대진표
 */

function solution(n, m) {
  let count = 0
  while( a !== b ){
    [a,b] = [a,b].map(el => Math.ceil(el / 2))
    count++
  }
  return count
}
solution(8,2,3) // 2

/* 
? 설명
* 토너먼트 형식으로,
*  1 - 2   3 - 4   5 - 6   7 - 8 
*  2(1) -  3(2) -  5(3) -  8(4)
*      2(1)     -      8(2)
*
* 인덱스로 보자면 두 숫자를 나눈 값을 올림하여 계속 반으로 나누면
* 2는  2-1-1-1 형태로, 8은 8-4-2-1 형태로 반씩 줄어듬!
* 그래서 두 숫자가 같아지기 전까지 반복문을 돌리고, 그 카운트를 반환했다.
*/