// * https://programmers.co.kr/learn/courses/30/lessons/12953

// ! 유클리드 호제법

function solution(arr){
    return arr.reduce((n,m)=>{
      let mod = n % m;
      let a = n;
      let b = m;
      
      while(mod>0){
        a = b
        b = mod
        mod = a % b
      }
      
      return n*m / b
    })
  }