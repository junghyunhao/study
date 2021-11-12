// * https://programmers.co.kr/learn/courses/30/lessons/42862

function solution (n, lost, reserve) {
    const newReserve = reserve.filter(r=>{
      return !lost.includes(r)
    })
  
    const newLost = lost.filter(l=>{
      return !reserve.includes(l)
    })
    
    newReserve.forEach(r=>{
      const lended = newLost.find(l=>l=== r - 1 || l===r + 1);
      if(lended){
          const lendedIdx = newLost.indexOf(lended);
          newLost.splice(lendedIdx, 1)
      }
  
    })
  
    return n - newLost.length;
}