// * https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  const arr = [];
  const stringN = String(n).split('').sort((a,b)=>b-a)
  for(let i=0; i<stringN.length; i++){
    arr.push(stringN[i])
  }
  return Number(arr.join(''))
}