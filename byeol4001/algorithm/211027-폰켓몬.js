
/*
 * https://programmers.co.kr/learn/courses/30/lessons/1845
 ! 폰켓몬
 */

function solution(nums) {
  const result = new Set([...nums])
  const max = nums.length / 2
  return  max < result.size ? max : result.size
}
// 최대로 가져갈수 있는 갯수는 max 
// nums에서 중복값을 제외한 갯수는 result.size
// 어차피 최대로 가져갈수 있는 갯수는 max의 값이기 때문에 result.size가 max보다 크면 max를 반환한다
