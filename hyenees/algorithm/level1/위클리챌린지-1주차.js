// * https://programmers.co.kr/learn/courses/30/lessons/82612

function solution (price, money, count) {
    let totalPrice = 0;

    for(let i=1; i<count+1; i++){
      totalPrice = totalPrice + price*i;
    }

    return totalPrice > money ? totalPrice - money : 0;
}