// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
	var answer = 0;

	let arr = Array.from(n + '').map((el) => parseInt(el));
	for (let i of arr) {
		answer += i;
	}

	return answer;
}
