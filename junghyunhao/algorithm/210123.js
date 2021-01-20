/**
 * https://programmers.co.kr/learn/courses/30/lessons/12930
 * ? 이상한 문자 만들기
 */
function solution(s) {
  let splitString = s.split(" ");
  let newArray = [];
  for (let i = 0; i < splitString.length; i++) {
    let string = "";
    for (let j = 0; j < splitString[i].length; j++) {
      if (j % 2 === 1) {
        string = string + splitString[i][j].toLowerCase();
      } else if (j % 2 === 0) {
        string = string + splitString[i][j].toUpperCase();
      }
    }
    newArray.push(string);
  }
  return newArray.join(" ");
}
