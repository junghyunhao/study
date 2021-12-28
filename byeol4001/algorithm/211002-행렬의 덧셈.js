/*
 * https://programmers.co.kr/learn/courses/30/lessons/12950
 ! 행렬의 덧셈
 */

function solution(arr1, arr2) {
  const outerLength = arr1.length
  const innerLength = arr1[0].length
  const arr = new Array(outerLength);
  for(let i = 0 ; i < outerLength ; i++){
    arr[i] = new Array(innerLength)
    for(let j = 0 ; j < innerLength ; j++){
      arr[i][j] = arr1[i][j]+arr2[i][j]
    }
  }
  return arr
}

solution([[1,2],[2,3]],[[3,4],[5,6]])
// [[4,6],[7,9]]

/* 
? 더 좋은 풀이
*/

function sumMatrix(A,B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}