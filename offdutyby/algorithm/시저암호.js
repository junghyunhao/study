// https://programmers.co.kr/learn/courses/30/lessons/12926#

function solution(s, n) {
	let answer = '';
	let lowerStr = 'abcdefghijklmnopqrstuvwxyz';
	let upperStr = lowerStr.toUpperCase();

	for (let i = 0; i < s.length; i++) {
		let el = s[i];

		const upperStrIdx = upperStr.indexOf(el);
		const lowerStrIdx = lowerStr.indexOf(el);
		const upperStrLength = upperStr.length;
		const lowerStrLength = lowerStr.length;

		if (el === ' ') {
			answer += ' ';
		} else if (el === el.charAt(0).toUpperCase()) {
			answer += upperStrIdx + n > upperStrLength - 1 ? upperStr[upperStrIdx + n - upperStrLength] : upperStr[upperStrIdx + n];
		} else if (el === el.charAt(0).toLowerCase()) {
			answer += lowerStrIdx + n > lowerStrLength - 1 ? lowerStr[lowerStrIdx + n - lowerStrLength] : lowerStr[lowerStrIdx + n];
		}
	}
	return answer;
}
