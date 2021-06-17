// * https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

function solution(dartResult) {
    let arr=[];
    for(let i=dartResult.length-1; i>=0; i-=1){
      const numElement = +dartResult[i];
      
      if(!isNaN(numElement)){
        if(!numElement && !isNaN(+dartResult[i-1])){
          arr.push(dartResult.slice(i-1));
          dartResult = dartResult.slice(0, i-1);
        }else{
          arr.push(dartResult.slice(i));
          dartResult = dartResult.slice(0, i);
        }
      }
    }
    arr.reverse();
  
    let answer = 0;
    let firstScore = 0;
    
    for(let j=0; j<arr.length; j+=1){
      const score = arr[j][1] == 0 ? arr[j][0] + arr[j][1] : arr[j][0];
      const bonus = arr[j][1] == 0 ? arr[j][2] : arr[j][1];
      const option = arr[j][1] == 0 ? arr[j][3] : arr[j][2];
      if(bonus === 'S'){
        answer += option === '#' ? -Math.pow(score, 1) : Math.pow(score, 1);
      }
    
      if(bonus === 'D'){
         answer += option === '#' ? -Math.pow(score, 2) : Math.pow(score, 2);
      }
    
      if(bonus === 'T'){
         answer += option === '#' ? -Math.pow(score, 3) : Math.pow(score, 3);
      }

      if(option === '*'){
          firstScore = j == 1 ? firstScore * 2 : firstScore;
          answer = j==2 ? answer * 2 - firstScore : answer * 2;   
      }
    
      if(!j){
        firstScore = answer;
      }
    }
    
    return answer;
}