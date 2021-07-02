/*
 * https://programmers.co.kr/learn/courses/30/lessons/42586#qna
 ! 기능개발
 */

function solution(progresses, speeds) {
  const endDateArr = [];

  // 각 개발이 끝나는 날짜수를 배열로 반환
  for (let i in speeds) {
    endDateArr.push(
      Math.ceil((100 - parseInt(progresses[i])) / parseInt(speeds[i]))
    );
  }

  // 개발을 한번에 배포할수 있는 값 계산
  let deployDate = endDateArr[0]; // 개발이 배포되는 날짜
  const result = [0]; // 배포될 개발갯수들이 쌓이는 배열  * for문이 돌면서 기존값에 더하기를 하므로 기본 값을 넣어줘야한다

  for (let i = 0, j = 0; i < endDateArr.length; i++) {
    if (endDateArr[i] <= deployDate) {
      // 배포 날짜보다 현재 값이 작거나 같으면 == 한번에 같이 배포
      result[j] += 1;
    } else {
      // 배포 날짜보다 현재 값이 크면 == 따로 혼자 배포
      deployDate = endDateArr[i]; // 개발이 배포되는 날짜 변경
      result[++j] = 1; // 배포될 개발일 추가
    }
  }
  return result;
}

solution([93, 30, 55], [1, 30, 5]);
//[]

/* 
? 하다가 배운것
 ! for (let i = 0, j = 0; i < arr.length; i++) 
* for문에 변수 두개 지정할수 있는거 처음 알았다 😅 
 
 ! result[++j] = 1 
 * 처음에 ++j 했는데 더하고 j가 증가하니까 오류가 았났다
 * 증가 시키고나서 할당해야함!  
 * 참고 -----
 * let a = 0,
 * _a = 0
 * a++    // 0
 * a      // 1
 * ++_a   // 1
 * a      // 1
 * 
 
 ! ceil / floor
 *  11번에서 계속 오류가 났는데 이거 때문이였다..
 *  올림을 해야하는데 내림을 해서 
 *  알고있는데 자꾸 헷갈려........😅
*/
