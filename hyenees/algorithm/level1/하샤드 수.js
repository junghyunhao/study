// * https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x){
    const xArr = x.toString().split('');
    let sum = 0;
    for(let i=0; i<xArr.length; i++){
      sum+=Number(xArr[i])
    }
    return x%sum === 0
  }