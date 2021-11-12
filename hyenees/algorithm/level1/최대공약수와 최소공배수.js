// * https://programmers.co.kr/learn/courses/30/lessons/12940

// ! 유클리드 호제법 https://velog.io/@dongyi/%EC%B5%9C%EB%8C%80-%EA%B3%B5%EC%95%BD%EC%88%98%EC%99%80-%EA%B3%B5%EB%B0%B0%EC%88%98%EB%A5%BC-%EA%B5%AC%ED%95%98%EB%8A%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-feat.-%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C-%ED%98%B8%EC%A0%9C%EB%B2%95

function solution(n, m){
    let mod = n % m;
    let a = n;
    let b = m;

    while(mod > 0){
      a = b
      b = mod
      mod = a % b
    }

    return [b, n * m / b];
}


  