/*
 * https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript
 ! 두 수 뽑아서 더하기
 */

function solution(arr) {
	let answer = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			let sumNumber = arr[i] + arr[j];
			if (answer.includes(sumNumber) === false) {
				answer.push(sumNumber);
			}
		}
	}
	answer.sort((a, b) => {
		if (a < b) return -1;
		if ((a = b)) return 0;
		if (a > b) return 1;
	});

	return answer;
}
