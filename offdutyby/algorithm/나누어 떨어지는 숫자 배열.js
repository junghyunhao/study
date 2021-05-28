// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
	var answer = [];

	answer = arr.filter((el) => el % divisor === 0);

	if (answer.length === 0) {
		answer.push(-1);
	} else {
		answer.sort((a, b) => {
			return a - b;
		});
	}

	return answer;
}
