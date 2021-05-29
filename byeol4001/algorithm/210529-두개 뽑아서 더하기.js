/*
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 ! 두개 뽑아서 더하기
 */

function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[j] + numbers[i]);
    }
  }

  result = result.reduce((acc, val) => {
    acc.includes(val) ? '' : acc.push(val);
    return acc.sort((a, b) => a - b);
  }, []);

  return result;
}

/* 
? 더 좋은 풀이
* 비슷하지만 reduce가 아닌 set을 사용한다
*/

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
