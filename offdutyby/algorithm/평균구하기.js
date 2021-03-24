/*
 * https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
 !  평균 구하기
 */

function solution(arr) {
	var answer = 0;
	let preAnswer = 0;

	for (let i = 0; i < arr.length; i++) {
		preAnswer += arr[i];
	}

	answer = preAnswer / arr.length;

	return answer;
}
