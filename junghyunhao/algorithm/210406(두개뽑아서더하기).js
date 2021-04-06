/**
 * 두개 뽑아서 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 */
function solution(nums) {
  let answer = [];
  let num;
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      num = nums[i] + nums[j];
      if (!answer.includes(num)) {
        answer.push(num);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
