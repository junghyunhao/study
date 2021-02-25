/**
 *
 * 세 수중 최소값 sort쓰지 말고 만들어보기
 */
function solution(numArray) {
  let smallestNum = a[0];
  for (let i = 1; i < a.length; i++) {
    if (smallestNum > a[i]) {
      smallestNum = a[i];
    }
  }
  return smallestNum;
}

function solutionTwo(a, b, c) {
  let smallestNum;
  if (a > b) {
    smallestNum = b;
  } else smallestNum = a;
  if (c < smallestNam) {
    smallestNum = c;
  }
}

const numArray = [6, 5, 11];

solution(numArray);
solutionTwo(1, 2, 3);
