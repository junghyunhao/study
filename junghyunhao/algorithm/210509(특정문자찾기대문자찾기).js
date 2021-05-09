/**
 * 
문자 찾기 - 한개의 문자열과, 특정 문자를 입력받아 특정문자가 입력받은 문자열에 몇개 존재하는지 알아보는 프로그램 
 */
function numOfChar(word, char) {
  let count = 0;
  for (let c of word) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

// 혹은 아래와 같이도 가능하다. 구분할 char로 나눈다음 length에서 하나뺀 크기와 동일 하므로
function numOfChar(word, char) {
  let answer = word.split(char).length - 1;
  return answer;
}

const word = "COMPUTERPROGRAMMING";
const char = "R";

numOfChar(word, char);

function numofUpperCase(word) {
  let count = 0;
  for (let char of word) {
    if (char === char.toUpperCase()) {
      count++;
    }
  }
  return count;
}
