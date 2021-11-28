
/*
 * https://programmers.co.kr/learn/courses/30/lessons/82612
 ! 부족한 금액 계산하기

 */

function solution(price, money, count) {
  let allTickeyPrice = 0
  for(let i = 1 ; i <= count ; i++){
    allTickeyPrice += price * i
  }
  const result = allTickeyPrice - money
  return result  >= 0 ? result : 0
}

solution(3,20,4) // 10

/* 
? 더 좋은 풀이
* allTickeyPrice을 변수로 사용하지 않고 그냥 money값에서 바로 차감해 변수 안만들고 사용했음.
! 알게된것
* Math.abs 사용
* 양수이거나 0이면 그냥 그 숫자를 반환하고, 음수이면 음수를 양수로 반환함
* ex ) Math.abs(2) > 2
* ex ) Math.abs(0) > 0
* ex ) Math.abs(-5) > 5
*/

function solution(price, money, count) {
    for(let i = 1; i <= count; i++) {
        money -= price * i;
    }
    return money >= 0 ? 0 : Math.abs(money);
}
