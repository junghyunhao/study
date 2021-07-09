// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
  let answer = true;
  let num= 0;
  const stringX = x+'';
  
  for(let i = 0; i < stringX.length; i++) {
      num += stringX[i]*1;
  }
  
  if(x%num !==0) {
      answer = false;
  }
  
  
  return answer;
}