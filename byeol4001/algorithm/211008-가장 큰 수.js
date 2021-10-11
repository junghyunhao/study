
/*
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 ! 가장 큰 수
 */

function solution(numbers) {
  const arr = numbers.map(el=>el+"")
  // 전체 배열을 문자로 만들어준다
  const result = arr.sort(((a,b)=>(b+a)-(a+b)))
  // 두 숫자가 문자인 값이므로
  // "2+20" = 22 이 아닌 
  // "2"+"20" "202" 의 형태로 앞뒤 변경된값을 파악해서 정렬
  return result[0] === "0" ? "0" : result.join('');
  // 첫번째 인자가 0이라는뜻은 뒤에 오는 값들도 0이므로 이 경우에는 아예 결과값을 0으로 초기화해서 리턴
}
