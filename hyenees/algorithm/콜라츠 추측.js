// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    let n = num;
    for(let i=0; i<500; i++){
        if(n!==1){
          n = n % 2 ? n * 3 + 1 : n /2;
        }else{
          return i;
        }
    }
    return -1;
}
