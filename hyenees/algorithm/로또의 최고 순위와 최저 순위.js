// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution (lottos, win_nums){
    const rankArr = [6, 6, 5, 4, 3, 2, 1]
    
    const count = lottos.filter(l=>win_nums.includes(l)).length
  
    const sameNumCounts = [count + lottos.filter(l=>l===0).length, count]
    
    return sameNumCounts.map(c=>rankArr[c])
}