// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s,n) {
    let answer = '';
    const aNum = 'a'.charCodeAt(0);
    const ANum = 'A'.charCodeAt(0);
    const zNum = 'z'.charCodeAt(0);
    const ZNum = 'Z'.charCodeAt(0);
  
    for(let i=0; i<s.length; i++){
      const sNum = s.charCodeAt(i) + n
    
      if(s[i] === ' '){
        answer+=' ';
        continue;
      }
      if(sNum > zNum){
        answer+= String.fromCharCode(sNum - zNum + aNum - 1);
        continue;
      }
      if((sNum > ZNum && aNum>sNum) || (aNum <= sNum && s.charCodeAt(i) <= ZNum)){
        answer+= String.fromCharCode(sNum - ZNum + ANum - 1);
        continue;
      }
      answer+=String.fromCharCode(sNum);
      
    }
    return answer;
  }