// * https://programmers.co.kr/learn/courses/30/lessons/12954
function solution(x,n){
    var answer=[];
    let newX;
    for(let i=1; i<n+1; i++){
      newX=x*i
      answer.push(newX)
    }
    return answer;
  }