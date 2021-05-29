// https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
	let answer = 0;
	let filterArr = [...new Set(nums)];

	answer = filterArr.length > nums.length / 2 ? nums.length / 2 : filterArr.length;

	return answer;
}
