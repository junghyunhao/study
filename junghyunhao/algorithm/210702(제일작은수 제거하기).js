/**
 * 제일작은 수 제거 
https://programmers.co.kr/learn/courses/30/lessons/12935
 */
function solution(arr) {
  let answer = [];
  if (arr.length === 1) {
    answer = [-1];
  } else if (arr.length > 1) {
    // sort로 array가 mutate되지 않게 하는 법
    const sortedArr = arr.slice().sort((a, b) => b - a);
    const smallestNum = sortedArr.slice(arr.length - 1)[0];
    arr.splice(arr.indexOf(smallestNum), 1);
    answer = arr;
  }
  return answer;
}
