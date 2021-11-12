// * https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand){
    const key = [['*',7,4,1],[0,8,5,2],['#',9,6,3]];
    let leftPos = key[0][0];
    let rightPos = key[2][0];
    
    let answer = '';
    
    for(let i=0; i<numbers.length; i+=1){
      if(key[0].includes(numbers[i])){
        answer+='L';
        leftPos = numbers[i];
        continue;
      }
      
      if(key[2].includes(numbers[i])){
        answer+='R';
        rightPos = numbers[i];
        continue;
      }
      
      let leftDistance;
      let rightDistance;
      const idx = key[1].indexOf(numbers[i]);
      
      if(key[1].includes(leftPos)){
        const leftPosIdx = key[1].indexOf(leftPos);
        leftDistance = Math.abs(leftPosIdx - idx);
      }else{
        const leftPosIdx = key[0].indexOf(leftPos);
        leftDistance = Math.abs(leftPosIdx - idx) + 1;
      }
  
      if(key[1].includes(rightPos)){
        const rightPosIdx = key[1].indexOf(rightPos);
        rightDistance = Math.abs(rightPosIdx - idx);
      }else{
        const rightPosIdx = key[2].indexOf(rightPos);
        rightDistance = Math.abs(rightPosIdx - idx) + 1;
      }
          
      if(leftDistance < rightDistance){
        answer += 'L';
        leftPos = numbers[i];
   
      }else if(leftDistance > rightDistance){
        answer += 'R';
        rightPos = numbers[i];
  
      }else{
        if(hand === 'left'){
          answer += 'L';
          leftPos = numbers[i];
        }else{
          answer += 'R';
          rightPos = numbers[i];
        }
      }
    }
    return answer;
}

// ! findIndex(object) vs indexOf(primitive)

