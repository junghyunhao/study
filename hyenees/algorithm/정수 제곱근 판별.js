// * https://programmers.co.kr/learn/courses/30/lessons/12934

function solution (n) {
    const x = Math.sqrt(n)
    if(x===Math.ceil(x)){
      return Math.pow(x+1,2)
    }else{
      return -1
    }
}

// ! while문 사용(x의 제곱이 n이 될 때까지 ) 

