// * https://programmers.co.kr/learn/courses/30/lessons/68935

function solution (n) {
 let answer = 0;
 const arr = [];

 let i=-1;
 while(n>=Math.pow(3,i)){
   i++;
 }

 for(let j=i-1; j>-1; j--){
   const value = Math.floor(n/Math.pow(3,j));
   arr.push(value);
   n -= Math.pow(3,j) * value;
 }

 for(let k=0; k<arr.length; k++){
   answer+=arr[k] * Math.pow(3, k);
 }

 return answer;
}

// ! javascript 진법변환 내장함수 toString, parseInt
