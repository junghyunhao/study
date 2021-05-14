/*
 * https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
 * ? 제일 작은 수 제거하기
 */

function solution(arr) {
	var answer = [];
	let small = 0;

	if (arr.length === 1) {
		return (answer = [-1]);
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (i === 0) {
				small = arr[0];
			} else {
				if (small > arr[i]) {
					small = arr[i];
				}
			}
		}
	}

	answer = arr.filter((x) => x !== small);

	return answer;
}
