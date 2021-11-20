
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12940
 ! 최대공약수와 최소공배수
 */

function solution(n, m) {
  const max = n >= m ? n : m
  let count = 1
  const result = new Array(2)
  const multipleForN = []
  const multipleForM = []
  while(count <= max){
    if(n%count===0 && m%count===0){
       //두 수 모두 나머지가 0인 최대값 > 최대 공약수 구하기
       result[0] = count
    }
    // 최소 공배수를 구하려고 배열들(multipleForN,multipleForM)에 값을 추가해줌
    multipleForN.push(n*count)
    multipleForM.push(m*count)
    count ++
  }
  // multipleForN과 multipleForM에 같이 있는 값의 제일 작은 수를 > 최소 공배수
  const LCM = multipleForN.filter(el=>multipleForM.includes(el))[0]
  result[1] = LCM
  return result
}
solution(3,12)


/* 
? 더 나은 풀이
* 위와 최소공배수 구하는 법이 다른데,
* "최수공배수 = 두수의 곱한값 / 최대공약수" 라고한다
* 최대공약수는 위에서 이미 구했으니, 최소공배수는 위와 같은 공식으로구했다.
*/

function solution(n, m) {
  const max = n >= m ? n : m
  let count = 1
  const result = new Array(2)
  while(count <= max){
    if(n%count===0 && m%count===0){
       //두 수 모두 나머지가 0인 최대값 > 최대 공약수 구하기
       result[0] = count
    }
    count ++
  }
result[1] = (n * m) / result[0]
return result
}
solution(3,12)