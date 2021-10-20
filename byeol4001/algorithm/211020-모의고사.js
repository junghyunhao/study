
/*
 * https://programmers.co.kr/learn/courses/30/lessons/42840
 ! 모의고사
 */

function solution(answers) {
  const arr = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
   let answersArr = [0,0,0]
  for (let i = 0 , size = arr.length ;i < answers.length ; i++){
    // answers에 들어온 값과 arr의 값을 비교해 맞는 값이 있으면 answersArr의 index에 값을 1씩 증가시킴
    let answer = answers[i]
    answer === arr[0][i%5] ? answersArr[0] += 1 : ''
    answer === arr[1][i%8] ? answersArr[1] += 1 : ''
    answer === arr[2][i%10] ? answersArr[2] += 1 : ''
  }
  const max = Math.max(...answersArr);
  // answersArr중 제일 큰수를 찾는다.
let result = answersArr.reduce((acc,cur,idx,arr)=>{
 if(cur == max){
   // 인덱스 순서로 오름차순 정렬
   acc.push(idx+1)
 }
return acc
},[])

return result 
}