
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12947
 ! 하샤드 수
 */

function solution(num) {
  let count = 0
  let number = num
  while( count <= 500 ){
    if( !(number % 2) ){
      number = number / 2
    } else if ( number === 1 ){
      break;
    } else {
      number = ( number * 3 ) + 1
    }
    count++
  }
 return count >= 500 ? -1 : count
}

solution(626331)  // -1



/* 
? 더 좋은 풀이
* num이 1이 아니거나, answer가 500이 아닐때까지 실행
* 내부에 삼항연산자로 if문을 사용했다
! 알게된것
*/

function collatz(num) {
  var answer = 0;
  while(num !=1 && answer !=500){
      num%2==0 ? num = num/2 : num = num*3 +1;
      answer++;
    }
  return num == 1 ? answer : -1;
}