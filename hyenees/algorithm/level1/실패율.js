// * https://programmers.co.kr/learn/courses/30/lessons/42889

function solution (N, stages) {
    const obj = {};
    let deno = stages.length;
    
    for(let i=1; i<N+1; i++){
      const stageLength = stages.filter(s=>s===i).length;  
      const failValue = stageLength / deno;
  
      deno = deno - stageLength;    
      obj[i] = failValue;
    }
  
    const sortedObj = Object.entries(obj).sort(([,a], [,b])=>b-a);
  
    return sortedObj.map(v=>+v[0])
}

// ! 객체의 value값으로 정렬