// https://programmers.co.kr/learn/courses/30/lessons/12924

// 1부터 연속된 숫자들을 더하다가 n보다 크거나 같아지면 반복문 종료, 2부터 연속된 숫자 더하기. n이 될때까지 반복

function solution (n){
    let answer = 0;
  
    for(let i=1; i<=n; i++){
      let sum = 0;
      let j = i;
  
      while(n>sum){
        sum+=j;
        j++;
      }
  
      if(sum === n){
        answer+=1;
      }
    }
  
    return answer;
}
  