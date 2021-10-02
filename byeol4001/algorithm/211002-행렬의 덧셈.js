/*
 * https://programmers.co.kr/learn/courses/30/lessons/12950
 ! 신규 아이디 추천
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
* 체이닝과 정규식으로 좀 더 깔끔한 풀이
! 알게된것
* string.padEnd(지정할길이,지정문자) : 현재 문자열에 인수로 지정된 길이만큼 지정 문자로 채워 새로운 문자열로 반환
*
* const str = "Hi";
* console.log(str.padEnd(10)); 
* // "Hi        " > Hi + 8개 공백  = 10자
* console.log(str.padEnd(10, "!"));
* // "Hi!!!!!!!! > Hi + 8개 느낌표 = 10자

*/

function sumMatrix(A,B){

  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}