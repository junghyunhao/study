
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12915
 ! 문자열 내 마음대로 정렬하기
 */
function solution(strings, n) {
  strings.sort(function(a,b){
    let first = a[n];
    let second = b[n];
      if (first === second) {
        return (a > b) - (a < b);
        // 비교 문자가 같으면 전체 문자를 비교
      } else {
        return (first > second) - (first < second);
        // (앞에 숫자가 크면 1을 반환하고 뒤에 숫자가 크면 -1를 반환)
        // 이렇게 리턴 값을 작성하면 일반적인 sort() 함수처럼 작동
      }
    })
  return strings;
}