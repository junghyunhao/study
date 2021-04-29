/**
 * https://programmers.co.kr/learn/courses/30/lessons/12916?language=ja
 * ? 문자열 내 p와 y의 개수
 */

function solution(s) {
	var answer;

	let pCount = 0;
	let yCount = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'p' || s[i] === 'P') {
			pCount++;
			console.log(pCount);
		} else if (s[i] === 'y' || s[i] === 'Y') {
			yCount++;
			console.log(pCount);
		}
	}

	if (pCount === yCount) {
		answer = true;
	} else {
		answer = false;
	}
	return answer;
}
