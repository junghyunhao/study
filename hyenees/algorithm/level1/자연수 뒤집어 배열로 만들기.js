// * https://programmers.co.kr/learn/courses/30/lessons/12932

function solution (n){
    var answer = [];
    const stringArr = String(n).split('').reverse()
    for(let i=0; i<stringArr.length; i++){
      answer.push(Number(stringArr[i]));
    }
    return answer;
  }