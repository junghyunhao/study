// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
	return Number.parseInt(n.toString(3).split('').reverse().join(''), 3);
}
