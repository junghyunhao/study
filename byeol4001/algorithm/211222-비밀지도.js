
/*
 * https://programmers.co.kr/learn/courses/30/lessons/17681
 ! 비밀지도
 */

 function changeBinary(num,row){
  let result = []
  while(num > 0){
    result.unshift(num % 2)
    num = parseInt(num / 2)
  }
  
  // 2진수로 변경하고 행의 갯수보다 배열이 짧으면 앞에 0으로 갯수 맞춰주기
  const length = result.length
  if (length < row){
    const count = row - length
    result = new Array(count).fill(0).concat(result)
  }
  return result
}

function solution(n, arr1, arr2) {
    const arr1Arr = arr1.map(el=>changeBinary(el,n))
    const arr2Arr = arr2.map(el=>changeBinary(el,n))
    const result = new Array(n)
    for(let i = 0 ; i < n ; i++){
      result[i] = new Array(n)
       for(let j = 0 ; j < n ; j++){
        result[i][j] = arr1Arr[i][j] + arr2Arr[i][j]
        result[i][j] = result[i][j] > 0 ? "#" : " "
       }
      result[i] = result[i].join("")
    }
  return result
}