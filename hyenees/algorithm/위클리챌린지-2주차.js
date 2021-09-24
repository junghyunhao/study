// * https://programmers.co.kr/learn/courses/30/lessons/83201

function solution (scores){
    let answer = ''
  
     for(let i=0; i < scores.length; i++){
       const scoreArr = scores.map(s=>s[i])
       
       const max = Math.max(...scoreArr)
       const min = Math.min(...scoreArr)
   
       // 인덱스값으로 자신을 평가한 점수가 유일한 최대/최소값인지 판별
       const isUniqueScore = (max === scoreArr[i] || min === scoreArr[i]) && scoreArr.indexOf(scoreArr[i]) === scoreArr.lastIndexOf(scoreArr[i])
       
       const sum = scoreArr.reduce((prev, curr) =>  {
             return prev + curr
           }, isUniqueScore ? -scoreArr[i] : 0) 
  
       const avg = sum / (isUniqueScore ? scoreArr.length - 1 : scoreArr.length)
      
        switch(true){
          case avg >= 90:
            answer += 'A';
            break;
          case avg >= 80 && avg < 90:
            answer += 'B';
            break;
          case avg >= 70 && avg < 80:
            answer += 'C';
            break;
          case avg >= 50 && avg < 70:
            answer += 'D';
            break;
          case avg < 50:
            answer += 'F';
            break;
          default:
        }
     }
    return answer
  }
  