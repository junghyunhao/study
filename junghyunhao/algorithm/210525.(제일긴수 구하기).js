const arr = ["teacher", "time", "beautiful", "good"];
// 주어진 array에서 가장긴 수 구하기 (나의답안 )
function findthelongestWord(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    if (arr[i].length > arr[i + 1].length) {
      answer = arr[i];
    } else answer = arr[i + 1];
  }
  return answer;
}
// 주어진 array에서 가장긴 수 구하기 (모범 )

function findthelongestWord(arr) {
  let answer,
    maxNum = Number.MIN_SAFE_INTEGER;
  for (x of arr) {
    if (x.length > maxNum) {
      maxNum = x.length;
      answer = x;
    }
  }
  return answer;
}

findthelongestWord(arr);
