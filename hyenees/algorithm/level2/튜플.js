function solution(s){
    const sArr = s.slice(2,-2).split('},{').map(el=> el.split(',').map(e=>+e))
  
    const sortedArr = sArr.sort((a,b)=> a.length - b.length)
  
    const answer = []
    
    sortedArr.forEach(a=>{
      a.forEach(b=>{
        if(!answer.includes(b)){
         answer.push(b)
        }
      })
    })
    
    return answer
  }