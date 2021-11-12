// * https://programmers.co.kr/learn/courses/30/lessons/86491

function solution (sizes){
    let max = 0
    let anoMax = 0

    for(let i=0; i<sizes.length; i++){
      if(max < Math.max(...sizes[i])){
        max = Math.max(...sizes[i])
      }
      
      if(anoMax < Math.min(...sizes[i])){
        anoMax = Math.min(...sizes[i])
      }
    }
    return max * anoMax
  }

  // * 다른 풀이(sort 사용)

  function solution (sizes){
    let max = 0
    let anoMax = 0

    for(let i=0; i<sizes.length; i++){
       const sortedSizes = sizes[i].sort((a,b)=>a-b)
       
      if(max < sortedSizes[1]){
        max = sortedSizes[1]
      }
      
      if(anoMax < sortedSizes[0]){
        anoMax = sortedSizes[0]
      }
    }
    return max * anoMax
  }