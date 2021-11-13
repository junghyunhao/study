// https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

function solution(n) {
	var answer = [];
	return n
		.toString()
		.split('')
		.reverse()
		.map((o) => (o = parseInt(o)));
}
