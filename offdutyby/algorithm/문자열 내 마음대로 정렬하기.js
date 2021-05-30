// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
	var answer = [];

	answer = strings.sort().sort(function (a, b) {
		if (a[n] > b[n]) {
			return 1;
		}
		if (a[n] < b[n]) {
			return -1;
		}
	});

	return answer;
}
