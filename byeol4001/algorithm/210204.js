/*
 * https://programmers.co.kr/learn/courses/30/lessons/12931
 ! 문자열 내 p와 y의 개수
 */

function solution(s) {
  const lowerCase = s.toLowerCase();
  let countP = 0;
  let countY = 0;
  for (let i in lowerCase) {
    if (lowerCase[i] === 'p') countP += 1;
    else if (lowerCase[i] === 'y') countY += 1;
    else '';
  }
  return countP === countY ? true : false;
}

/* 
? 더 좋은 풀이
! 나의 경우는 for문에 if문까지 돌려서 확인했는데 아래는 split으로 나눈뒤 length를 확인했다
! 그러면 기준이 되는 글자는 빈 부분으로 잘려서 배열이 생성되면 리턴되는 배열의 길이는 일치되는 개수 + 1 이므로 비교가 가능하다고...
* "pPoooyY".toLowerCase().split('p')  // [ '', '', 'oooyy' ]
*/

function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
