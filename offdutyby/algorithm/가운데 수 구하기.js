/*
 * https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 ! 가운데 수 구하기
 */

function solution(s) {
	var answer = '';
	let lengthHarf = s.length / 2;

	if (s.length % 2 === 0) {
		answer = s[lengthHarf - 1] + s[lengthHarf];
	} else {
		let intLengthHarf = parseInt(lengthHarf);
		answer = s[intLengthHarf];
	}

	return answer;
}
